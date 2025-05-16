
import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, subtitle, linkText, linkPath }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex justify-center">
            <h1 className="text-primary text-2xl font-bold">Yellow Mountain</h1>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-center text-sm text-gray-600">
              {subtitle}{" "}
              {linkText && linkPath && (
                <Link to={linkPath} className="font-medium text-primary hover:text-primary/80">
                  {linkText}
                </Link>
              )}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
