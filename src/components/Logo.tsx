import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Building2 className="h-6 w-6 text-primary" />
      <h1 className="text-xl font-bold text-foreground">Gen2 Wealth</h1>
    </div>
  );
}
