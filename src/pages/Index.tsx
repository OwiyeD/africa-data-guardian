import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BarChart3, Brain, FileText, Upload, TrendingUp, Users, Globe, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-hero">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AfricaInsure AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Advanced insurance data analytics platform built for African markets. 
            Anonymize, analyze, and extract insights from your insurance data with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                Upload Data
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Insurance Analytics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for African insurance companies to manage, 
              analyze, and derive insights from their data while ensuring privacy and compliance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Data Anonymization</CardTitle>
                <CardDescription>
                  Advanced entity anonymization with secure mapping and privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic PII detection</li>
                  <li>• Secure ID mapping</li>
                  <li>• GDPR compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <FileText className="h-10 w-10 text-success mb-2" />
                <CardTitle>Quality Reports</CardTitle>
                <CardDescription>
                  Comprehensive data quality assessment and validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Completeness analysis</li>
                  <li>• Duplicate detection</li>
                  <li>• Validation reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-warning mb-2" />
                <CardTitle>EDA & Visualization</CardTitle>
                <CardDescription>
                  Interactive exploratory data analysis and visualization tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Statistical summaries</li>
                  <li>• Distribution analysis</li>
                  <li>• Interactive charts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <Brain className="h-10 w-10 text-accent mb-2" />
                <CardTitle>AI Insights</CardTitle>
                <CardDescription>
                  Machine learning powered insights and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pattern recognition</li>
                  <li>• Risk assessment</li>
                  <li>• Predictive modeling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Feature Engineering</CardTitle>
                <CardDescription>
                  Automated feature selection and engineering strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Auto feature creation</li>
                  <li>• Selection algorithms</li>
                  <li>• Transformation tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <Globe className="h-10 w-10 text-success mb-2" />
                <CardTitle>African Focus</CardTitle>
                <CardDescription>
                  Tailored for African insurance markets and regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Local market insights</li>
                  <li>• Regulatory compliance</li>
                  <li>• Cultural context</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Insurance Leaders</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">Records Processed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">99.9%</div>
              <p className="text-muted-foreground">Privacy Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">African Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start analyzing your insurance data today with our powerful AI-driven platform.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-smooth">
            <Link to="/upload">
              <Zap className="mr-2 h-5 w-5" />
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
