import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../common/Logo";
import Button from "../common/Button";

const navLinks = [
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "Discover",
    path: "/discover",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

        </nav>

        {/* Desktop Right */}

        <div className="hidden items-center gap-4 lg:flex">

          <Link
            to="/login"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link to="/register">
            <Button>
              Start Growing
            </Button>
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px]"
            : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#030712] px-6 py-6">

          <div className="space-y-5">

            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="block text-gray-300 transition hover:text-white"
              >
                {item.title}
              </NavLink>
            ))}

          </div>

          <div className="mt-8 space-y-4">

            <Link
              to="/login"
              onClick={() =>
                setMobileOpen(false)
              }
              className="block text-gray-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              <Button className="w-full">
                Start Growing
              </Button>
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}