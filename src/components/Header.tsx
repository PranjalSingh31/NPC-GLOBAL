import { Menu, User as UserIcon, LogOut, ChevronDown, Target, Users, TrendingUp, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "../App";
import logo from "figma:asset/35bc48c0e742f50b38ba7cb21012b1be437fcd3c.png";

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "What We Do", id: "services" },
    { label: "Business & Franchise", id: "business-franchise" },
    { label: "Investors", id: "investors" },
    { label: "Lenders", id: "lenders" },
    { label: "Buyers", id: "buyers" },
    { label: "Founder & Team", id: "founder" },
    { label: "Brands", id: "brands" },
    { label: "Partners", id: "partners" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 glass-effect border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center h-20 relative">
          {/* Mobile: Menu Button on Left */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-gray-100 rounded-xl transition-all"
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[320px] overflow-y-auto bg-white"
              >
              <SheetHeader>
                <SheetTitle className="text-[#0f172a] text-xl">
                  Navigation
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu for NPC Global website
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {/* About Us - Collapsible */}
                <Collapsible
                  open={aboutOpen}
                  onOpenChange={setAboutOpen}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-[#0f172a] rounded-xl transition-all duration-200">
                    <span className="font-medium">About Us</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-4 px-2">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                        NPC GLOBAL is a dynamic management consulting firm specializing in strategic consulting, mergers & acquisitions, franchising, and fundraising. Founded six years ago by visionary entrepreneur Nitish Pandey, the firm was built on the belief that business growth should be both scalable and sustainable.
                      </p>
                      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                        With a deep understanding of emerging markets and a strong focus on execution, NPC GLOBAL partners with brands across industries to unlock growth, secure capital, and expand strategically.
                      </p>
                      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                        At the heart of our approach lies a commitment to creating long-term value—for startups, high-growth companies, and investors alike. Whether it's crafting go-to-market strategies, facilitating brand expansions through franchising, structuring investments, or driving M&A transactions, our team brings a mix of strategic insight, operational experience, and investor network strength.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm text-[#0f172a] mb-1 font-semibold">
                              Our Mission
                            </h4>
                            <p className="text-xs text-gray-600">
                              We don't only advise, We also
                              Deliver Outcome's
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm text-[#0f172a] mb-1 font-semibold">
                              Our Clients
                            </h4>
                            <p className="text-xs text-gray-600">
                              Trusted by leading brands across
                              various sectors
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm text-[#0f172a] mb-1 font-semibold">
                              Our Approach
                            </h4>
                            <p className="text-xs text-gray-600">
                              Data-driven strategies with
                              hands-on execution
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Other Navigation Items */}
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-[#0f172a] rounded-xl transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          </div>

          {/* Logo - Desktop Left, Mobile Center */}
          <div className="flex items-center gap-4 md:absolute md:left-0 absolute left-1/2 -translate-x-1/2 md:translate-x-0">
            <img src={logo} alt="NPC Global Logo" className="h-14 w-auto" />
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <h1 className="hidden md:block text-2xl tracking-wide bg-gradient-to-r from-[#0f172a] to-[#334155] bg-clip-text text-transparent">
              NPC GLOBAL
            </h1>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-all"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("founder")}
              className="text-gray-700 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-all"
            >
              Team
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("brands")}
              className="text-gray-700 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-all"
            >
              Portfolio
            </Button>
            
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-all gap-1"
                >
                  About Us
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center"
                className="w-[480px] bg-white border border-gray-200 shadow-xl rounded-2xl p-6 z-[100]"
                sideOffset={8}
              >
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    NPC GLOBAL is a dynamic management consulting firm specializing in strategic consulting, mergers & acquisitions, franchising, and fundraising. Founded six years ago by visionary entrepreneur Nitish Pandey, the firm was built on the belief that business growth should be both scalable and sustainable.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    With a deep understanding of emerging markets and a strong focus on execution, NPC GLOBAL partners with brands across industries to unlock growth, secure capital, and expand strategically.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    At the heart of our approach lies a commitment to creating long-term value—for startups, high-growth companies, and investors alike. Whether it's crafting go-to-market strategies, facilitating brand expansions through franchising, structuring investments, or driving M&A transactions, our team brings a mix of strategic insight, operational experience, and investor network strength.
                  </p>

                  <div className="pt-2 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm text-[#0f172a] mb-1">
                          Our Mission
                        </h4>
                        <p className="text-xs text-gray-600">
                          We don't only advise, We also Deliver Outcome's
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm text-[#0f172a] mb-1">
                          Our Clients
                        </h4>
                        <p className="text-xs text-gray-600">
                          Trusted by leading brands across various sectors
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm text-[#0f172a] mb-1">
                          Our Approach
                        </h4>
                        <p className="text-xs text-gray-600">
                          Data-driven strategies with hands-on execution
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-all"
            >
              Contact
            </Button>
          </nav>

          {/* Auth Buttons / Profile - Right */}
          <div className="flex items-center gap-3 ml-auto">
            {user ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="rounded-full bg-gradient-to-br from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md"
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </Button>
                {profileOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                      <div className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
                        <p className="text-sm text-[#0f172a] font-semibold">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {user.email}
                        </p>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={() => {
                            setProfileOpen(false);
                            window.location.hash = "#/admin";
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 mb-1"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Admin Dashboard</span>
                        </button>
                        <button
                          onClick={() => {
                            setProfileOpen(false);
                            onLogout();
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Log out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() =>
                    (window.location.hash = "#/login")
                  }
                  className="text-gray-700 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-all hidden sm:inline-flex"
                >
                  Login
                </Button>
                <Button
                  onClick={() =>
                    (window.location.hash = "#/register")
                  }
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-lg border-0"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
