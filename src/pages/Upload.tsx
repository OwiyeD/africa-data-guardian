import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const UploadPage = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [entityType, setEntityType] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File Selected",
        description: `${selectedFile.name} is ready for upload`,
      });
    }
  };

  const handleSubmit = async () => {
    if (!file || !entityType) {
      toast({
        title: "Missing Information",
        description: "Please select a file and entity type",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Upload Successful",
        description: "Your insurance data has been uploaded and is ready for analysis",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Insurance Data Upload
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your insurance datasets for comprehensive analysis, anonymization, and insights
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Dataset
              </CardTitle>
              <CardDescription>
                Upload CSV or Excel files containing insurance data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="file-upload">Select File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="entity-type">Entity Type</Label>
                <Select value={entityType} onValueChange={setEntityType}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select entity type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer">Customer Data</SelectItem>
                    <SelectItem value="policy">Policy Data</SelectItem>
                    <SelectItem value="claim">Claims Data</SelectItem>
                    <SelectItem value="agent">Agent Data</SelectItem>
                    <SelectItem value="vehicle">Vehicle Data</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSubmit} 
                disabled={!file || !entityType || uploading}
                className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                {uploading ? "Uploading..." : "Upload & Analyze"}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-accent" />
                File Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Supported Formats</p>
                    <p className="text-sm text-muted-foreground">CSV, Excel (.xlsx, .xls)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Maximum Size</p>
                    <p className="text-sm text-muted-foreground">Up to 100MB per file</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                  <div>
                    <p className="font-medium">Data Privacy</p>
                    <p className="text-sm text-muted-foreground">All data is automatically anonymized during processing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {file && (
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>Selected File</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <FileSpreadsheet className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default UploadPage;