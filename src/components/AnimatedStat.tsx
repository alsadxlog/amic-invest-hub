import { useCountUp } from "@/hooks/use-count-up";
import { LucideIcon } from "lucide-react";

interface AnimatedStatProps {
  icon: LucideIcon;
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  isDecimal?: boolean;
  decimalPlaces?: number;
}

const AnimatedStat = ({ 
  icon: Icon, 
  end, 
  prefix = "", 
  suffix = "", 
  label, 
  duration = 2000,
  isDecimal = false,
  decimalPlaces = 2
}: AnimatedStatProps) => {
  const { ref, count } = useCountUp({ end: isDecimal ? end * 100 : end, duration });
  
  const displayValue = isDecimal 
    ? (count / 100).toFixed(decimalPlaces)
    : count.toLocaleString();

  return (
    <div ref={ref} className="p-8 text-center">
      <Icon className="h-10 w-10 mx-auto mb-4 text-accent" />
      <p className="text-4xl font-bold text-primary mb-2">
        {prefix}{displayValue}{suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default AnimatedStat;
