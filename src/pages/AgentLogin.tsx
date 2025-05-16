
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const AgentLogin = () => {
  const [formData, setFormData] = useState({
    agentId: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Demo credentials
      if (formData.agentId === "agent123" && formData.password === "password") {
        toast({
          title: "Login Successful",
          description: "Welcome to the Agent Portal",
        });
        // In a real app, you'd navigate to the agent dashboard
        // navigate("/agent-dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid agent ID or password",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-primary text-2xl font-bold">
            Yellow Mountain
          </Link>
          <Link to="/" className="text-sm text-gray-600 hover:text-primary">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Agent Login</CardTitle>
              <CardDescription className="text-center">
                Enter your agent ID and password to access the agent portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="agentId" className="text-sm font-medium">
                    Agent ID
                  </label>
                  <Input
                    id="agentId"
                    name="agentId"
                    placeholder="Enter your agent ID"
                    value={formData.agentId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <Link to="/" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-600">
                Need help? <a href="#" className="text-primary hover:underline">Contact support</a>
              </p>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center">
            <Link to="/user-login" className="text-primary hover:underline text-sm">
              Client Login
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-white p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2024 Yellow Mountain Capital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AgentLogin;
