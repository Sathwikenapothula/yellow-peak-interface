
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col justify-center items-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
