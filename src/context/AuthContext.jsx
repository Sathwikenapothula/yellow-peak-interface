
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock functions for authentication
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Mock login implementation
      console.log("Logging in with:", email, password);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ email, id: "user-123", name: "Test User" });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email, password, role) => {
    setIsLoading(true);
    try {
      // Mock signup implementation
      console.log("Signing up with:", email, password, role);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ email, id: "user-456", name: "New User", role });
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
