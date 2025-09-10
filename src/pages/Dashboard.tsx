import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Shield, FileText, Brain, TrendingUp, Users, AlertTriangle, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const mockData = {
    totalRecords: 125430,
    anonymizedRecords: 125430,
    qualityScore: 87,
    completeness: 94,
    featuresIdentified: 23,
    recommendations: 8
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive insights and analysis for your insurance data
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{mockData.totalRecords.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Records</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">{mockData.anonymizedRecords.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Anonymized</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold">{mockData.qualityScore}%</p>
                  <p className="text-sm text-muted-foreground">Quality Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">{mockData.featuresIdentified}</p>
                  <p className="text-sm text-muted-foreground">Features Found</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Sections */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Data Quality Report
              </CardTitle>
              <CardDescription>Assessment of data completeness and quality</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Data Completeness</span>
                  <Badge variant="secondary">{mockData.completeness}%</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: `${mockData.completeness}%` }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">No duplicate records found</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm">3% missing values in age column</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">All phone numbers validated</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Full Report
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Feature Engineering
              </CardTitle>
              <CardDescription>AI-suggested features and transformations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-medium">Age Groups</p>
                  <p className="text-sm text-muted-foreground">Create categorical age ranges for better segmentation</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-medium">Risk Score</p>
                  <p className="text-sm text-muted-foreground">Combine multiple factors into a single risk indicator</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-medium">Geographic Clusters</p>
                  <p className="text-sm text-muted-foreground">Group locations by risk patterns</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                Apply Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Anonymization Status */}
        <Card className="bg-gradient-card border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              Anonymization Status
            </CardTitle>
            <CardDescription>Privacy protection measures applied to your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-muted rounded-lg">
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="font-medium">Personal Identifiers</p>
                <p className="text-sm text-muted-foreground">All names and IDs anonymized</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="font-medium">Contact Information</p>
                <p className="text-sm text-muted-foreground">Phone and email encrypted</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="font-medium">Location Data</p>
                <p className="text-sm text-muted-foreground">Addresses generalized</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;