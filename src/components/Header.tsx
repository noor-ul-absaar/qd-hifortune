import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "products", label: "Products" },
    { href: "services", label: "Services" },
    { href: "contact", label: "Contact" },
  ];

  const handleNavClick = (page: string) => {
    if (page === "home") {
      onNavigate("home");
    } else if (page === "products") {
      onNavigate("products");
    } else {
      // For sections on home page, navigate to home first then scroll
      if (currentPage !== "home") {
        onNavigate("home");
      }
      setTimeout(() => {
        const element = document.getElementById(page);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="bg-primary text-primary-foreground p-2 rounded-lg mr-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="font-bold">QH</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Qingdao Haifute</h1>
              <p className="text-sm text-muted-foreground">Rubber Machinery & Mould</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors ${
                  currentPage === item.href || (currentPage === "home" && ["about", "services", "contact"].includes(item.href))
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left transition-colors ${
                    currentPage === item.href || (currentPage === "home" && ["about", "services", "contact"].includes(item.href))
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}