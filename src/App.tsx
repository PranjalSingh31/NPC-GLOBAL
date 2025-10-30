import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { AudienceSelector } from "./components/AudienceSelector";
import { BusinessFranchise } from "./components/BusinessFranchise";
import { Investors } from "./components/Investors";
import { Lenders } from "./components/Lenders";
import { Buyers } from "./components/Buyers";
import { Team } from "./components/Team";
import { Brands } from "./components/Brands";
import { BankingPartners } from "./components/BankingPartners";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Admin } from "./components/Admin";
import { Toaster } from "./components/ui/sonner";

export interface User {
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "login" | "register" | "admin">("home");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem("npc_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/login") {
        setCurrentPage("login");
      } else if (hash === "#/register") {
        setCurrentPage("register");
      } else if (hash === "#/admin") {
        setCurrentPage("admin");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem("npc_user", JSON.stringify(userData));
    window.location.hash = "#/";
  };

  const handleRegister = (userData: User) => {
    setUser(userData);
    localStorage.setItem("npc_user", JSON.stringify(userData));
    window.location.hash = "#/";
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("npc_user");
    window.location.hash = "#/";
  };

  if (currentPage === "login") {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === "register") {
    return <Register onRegister={handleRegister} />;
  }

  if (currentPage === "admin") {
    return (
      <>
        <Admin />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header user={user} onLogout={handleLogout} />
      <main>
        <Hero />
        <Services />
        <AudienceSelector />
        <BusinessFranchise />
        <Investors />
        <Lenders />
        <Buyers />
        <Team />
        <Brands />
        <BankingPartners />
        <Reviews user={user} />
        <Contact />
      </main>
      <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 NPC Global. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
