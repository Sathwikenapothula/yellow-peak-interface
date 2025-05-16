
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../context/AuthContext";
import { validateEmail, validatePassword, validateName, validatePhone } from "../../utils/validators";

const AgentSignup = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Validate inputs
    let valid = true;
    const newErrors = {};
    
    if (!name || !validateName(name)) {
      newErrors.name = "Full name is required";
      valid = false;
    }
    
    if (!company) {
      newErrors.company = "Company name is required";
      valid = false;
    }
    
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }
    
    if (!phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }
    
    if (!experience) {
      newErrors.experience = "Please describe your experience";
      valid = false;
    }
    
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    
    if (!agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
      valid = false;
    }
    
    if (!valid) {
      setErrors(newErrors);
      return;
    }
    
    try {
      await signup(email, password, 'agent');
      navigate("/agent-application-success"); // Redirect to success page
    } catch (error) {
      console.error("Signup failed:", error);
      setErrors({
        email: "Failed to create account. Email might already be in use."
      });
    }
  };

  return (
    <AuthLayout 
      title="Apply for Agent Account" 
      subtitle="Already have an agent account?"
      linkText="Sign in" 
      linkPath="/agent-login"
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={errors.company ? "border-red-500" : ""}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Tell us about your experience
            </label>
            <Textarea
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className={errors.experience ? "border-red-500" : ""}
              rows={4}
            />
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "border-red-500" : ""}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? "border-red-500" : ""}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={(checked) => setAgreeToTerms(checked)}
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{" "}
            <a href="/terms" className="text-primary hover:text-primary/80">
              Terms and Conditions
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
        )}

        <div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting application..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default AgentSignup;
