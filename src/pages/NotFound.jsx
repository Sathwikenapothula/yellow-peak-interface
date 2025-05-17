
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-8">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
        <p className="mt-6 text-base text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-10">
          <Link to="/">
            <Button>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
