import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, Users, FileText, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  investment_type: string;
  message: string;
  date_registered: string;
}

interface LoanApplication {
  id: string;
  user_id: string;
  amount_requested: number;
  currency: string;
  duration_months: number | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadData();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
    }
  };

  const loadData = async () => {
    try {
      const [usersResponse, applicationsResponse] = await Promise.all([
        supabase.from("users").select("*").order("date_registered", { ascending: false }),
        supabase
          .from("loan_applications")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      if (usersResponse.data) setUsers(usersResponse.data);
      if (applicationsResponse.data) setApplications(applicationsResponse.data);
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
    toast({
      title: "Logged out successfully",
    });
  };

  const stats = [
    {
      title: "Total Members",
      value: users.length.toString(),
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Pending Applications",
      value: applications.filter((app) => app.status === "pending").length.toString(),
      icon: FileText,
      color: "text-yellow-600",
    },
    {
      title: "Approved Loans",
      value: applications.filter((app) => app.status === "approved").length.toString(),
      icon: TrendingUp,
      color: "text-green-600",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Admin Dashboard</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>Latest member registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Investment Type</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.slice(0, 10).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.investment_type}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(user.date_registered).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loan Applications</CardTitle>
            <CardDescription>Recent loan application submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Amount</TableHead>
                  <TableHead>Currency</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.slice(0, 10).map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">
                      {app.amount_requested.toLocaleString()}
                    </TableCell>
                    <TableCell>{app.currency}</TableCell>
                    <TableCell>{app.duration_months || "N/A"} months</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          app.status === "approved"
                            ? "default"
                            : app.status === "pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(app.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
