import { Link, useNavigate } from 'react-router-dom';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

export function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <nav className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#3d4f5c] to-[#5a7280] bg-opacity-90 backdrop-blur-sm text-white rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between" style={{backgroundColor: 'rgba(61, 79, 92, 0.9)'}}>
          <Link to="/" className="flex items-center gap-3">
            <img src="/dfefwe.png" alt="ATSA Logo" className="w-14 h-14 object-contain" style={{mixBlendMode: 'lighten'}} />
            <span className="text-xl font-bold">ATSA</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-3">
              <a href="#products" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">Products</a>
              <a href="#services" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">Services</a>
              <a href="#materials" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">Materials</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-[#3d4f5c] hover:bg-gray-100 transition font-semibold shadow-md">Contact</a>
            </div>
            {user ? (
              <div className="flex items-center gap-3 ml-3 pl-3 border-l border-white/20">
                <div className="flex items-center gap-2 px-3 py-2">
                  <UserIcon className="w-5 h-5" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition ml-3 pl-3 border-l border-white/20"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
