-- Create users table for registrations
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  investment_type TEXT NOT NULL,
  message TEXT NOT NULL,
  date_registered TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policy allowing anyone to insert (public registration)
CREATE POLICY "Anyone can register"
  ON public.users
  FOR INSERT
  WITH CHECK (true);

-- Create policy allowing authenticated users to view all
CREATE POLICY "Authenticated users can view all"
  ON public.users
  FOR SELECT
  TO authenticated
  USING (true);

-- Create loan_applications table
CREATE TABLE public.loan_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  amount_requested NUMERIC NOT NULL,
  currency TEXT DEFAULT 'USD',
  duration_months INTEGER,
  status TEXT DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.loan_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing applications
CREATE POLICY "Authenticated users can view applications"
  ON public.loan_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for inserting applications
CREATE POLICY "Anyone can submit application"
  ON public.loan_applications
  FOR INSERT
  WITH CHECK (true);

-- Create policy for updating applications (admin only, will be enhanced later with roles)
CREATE POLICY "Authenticated users can update applications"
  ON public.loan_applications
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for better performance
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_applications_user_id ON public.loan_applications(user_id);
CREATE INDEX idx_applications_status ON public.loan_applications(status);