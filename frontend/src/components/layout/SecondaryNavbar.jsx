import { Heart, ShoppingBag, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
export default function SecondaryNavbar() {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  console.log("User:", user);
  console.log("Logged in:", isAuthenticated);
  
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "New Arrivals",
      path: "/new-arrivals",
    },
    {
      name: "Collections",
      path: "/collections",
    },
    {
      name: "Best Sellers",
      path: "/best-sellers",
    },
    {
      name: "Sale",
      path: "/sale",
    },
  ];

  const isActive = (path) => {
  if (path === "/") {
    return location.pathname === "/";
  }

  return location.pathname.startsWith(path);
};

  return (
    <header className="fixed z-50 w-full border-b border-[#E8E3DE] bg-[#FDFCFB]">

      <nav className="mx-auto flex h-[72px] w-full items-center px-6 md:px-10 lg:px-16">

        {/* =========================================
            LOGO
        ========================================= */}

        <Link
          to="/"
          className="
            shrink-0
            font-serif
            text-3xl
            tracking-[-0.05em]
            text-[#171717]
            transition-opacity
            hover:opacity-60
            md:text-[32px]
          "
        >
          ÉLAN
        </Link>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <div className="ml-auto mr-8 hidden items-center gap-8 lg:flex xl:gap-10">

          {navLinks.map((link) => {

            const active = isActive(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative
                  py-2
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  transition-colors
                  duration-300

                  ${
                    active
                      ? "text-[#171717]"
                      : "text-[#383838] hover:text-[#000000]"
                  }

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[1.5px]
                  after:bg-[#171717]
                  after:transition-all
                  after:duration-300

                  ${
                    active
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

        </div>

        {/* =========================================
            ACTION ICONS
        ========================================= */}

        <div className="ml-auto flex items-center gap-5 md:gap-7">

          {/* Wishlist */}

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="
              flex
              items-center
              justify-center
              text-[#171717]
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <Heart
              size={22}
              strokeWidth={1.7}
            />
          </Link>

          {/* Shopping Bag */}

          <Link
            to="/cart"
            aria-label="Shopping bag"
            className="
              flex
              items-center
              justify-center
              text-[#171717]
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <ShoppingBag
              size={21}
              strokeWidth={1.7}
            />
          </Link>

          {/* User */}

          <Link
            to="/profile"
            aria-label="Account"
            className="
              flex
              items-center
              justify-center
              text-[#171717]
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <UserRound
              size={21}
              strokeWidth={1.7}
            />
          </Link>

        </div>

      </nav>

      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}

      <div className="border-t border-[#E8E3DE] lg:hidden">

        <div className="flex gap-6 overflow-x-auto px-6 py-3 scrollbar-hide">

          {navLinks.map((link) => {

            const active = isActive(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  shrink-0
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  transition-colors

                  ${
                    active
                      ? "text-[#171717]"
                      : "text-neutral-500 hover:text-[#171717]"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

        </div>

      </div>

    </header>
  );
}