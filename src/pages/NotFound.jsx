import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 max-w-content mx-auto px-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-soft text-primary mx-auto flex items-center justify-center">
        <Compass size={32} />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-deep">Page not found</h1>
      <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
        The page you are looking for might have been moved or does not exist. Explore our courses or return home.
      </p>
      <div className="flex items-center justify-center gap-4 pt-4">
        <Button to="/" size="md" variant="primary">
          Return home
        </Button>
        <Button to="/courses" size="md" variant="ghost">
          Browse courses
        </Button>
      </div>
    </div>
  );
}
