import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 text-xl font-bold text-blue-600">
              <span>AirQuality.co</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
            </Link>
            <Link href="/research">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">
                Research
              </a>
            </Link>
            <Link href="/team">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </a>
            </Link>
            <Link href="/get-involved">
              <Button variant="default">Get Involved</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/">
              <a
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/research">
              <a
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </a>
            </Link>
            <Link href="/team">
              <a
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
            </Link>
            <Link href="/get-involved">
              <a onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full">
                  Get Involved
                </Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

