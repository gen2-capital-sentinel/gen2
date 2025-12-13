
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Zap, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'AI-Powered Insights',
    description: 'Leverage the power of artificial intelligence to get personalized investment recommendations and market analysis. Our algorithms learn your risk tolerance and financial goals.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Automated Portfolios',
    description: 'Set your strategy and let our system do the work. We offer automated rebalancing and dividend reinvestment to keep your portfolio on track, 24/7.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Advanced Analytics',
    description: 'Go beyond the surface with our advanced analytics dashboard. Track your performance, understand your diversification, and identify new opportunities with institutional-grade tools.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">A Smarter Way to Invest</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with proven financial strategies to give you an edge.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="items-center">
                 <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary shadow-md">
                    {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
