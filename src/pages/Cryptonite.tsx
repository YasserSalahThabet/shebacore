import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  BarChart3, 
  Bell, 
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Signals",
    description: "Get instant trading signals powered by advanced AI algorithms analyzing market trends 24/7."
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Automated execution ensures you never miss a trading opportunity with millisecond response times."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in risk controls and stop-loss mechanisms to protect your investments."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with performance metrics and historical data analysis."
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Customizable notifications via SMS, email, or push notifications for every signal."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-powered entry and exit points with high accuracy rate across multiple markets."
  }
];


export default function Cryptonite() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/50 text-primary">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Trading Signals
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Trade Smarter with</span>
              <br />
              <span className="text-gradient">Cryptonite</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to receive precise trading signals, 
              automate your strategies, and maximize your crypto portfolio performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Trading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border/50 hover:bg-muted/50">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for <span className="text-gradient">Smart Trading</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to stay ahead of the market and make informed trading decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lifetime <span className="text-gradient">Access</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One-time payment. No recurring fees. Forever access.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="relative bg-card/50 backdrop-blur-sm border-primary shadow-lg shadow-primary/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60" />
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  Best Value
                </div>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground ml-2">lifetime</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">Real-time Buy & Sell Signals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">Telegram Bot Connection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">Lifetime Updates & Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">No Monthly Fees</span>
                  </li>
                </ul>
                
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">Get Lifetime Access</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of traders who are already using Cryptonite to maximize their profits.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
