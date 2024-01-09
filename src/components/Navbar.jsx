import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="bg-secondary-background text-primary-text p-4 shadow-xlg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="font-bold text-xl">
          <Link to="/" className="link-underline">Fronty</Link>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-8">
          <Link to="/problems" className="link-underline">Problems</Link>
          <Link to="/profile" className="link-underline">Profile</Link>
        </div>
      </div>
    </nav>
    </>
  );
}
