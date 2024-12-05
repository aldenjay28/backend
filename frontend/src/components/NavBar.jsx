import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <nav className="bg-secondary text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="text-xl font-bold">Betting Game</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login" className="hover:text-accent">Login</Link>
        <Link to="/register" className="hover:text-accent">Register</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
