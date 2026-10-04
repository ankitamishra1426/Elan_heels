import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingBag, User } from "lucide-react";

const leftLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "New Arrivals",
    path: "/new-arrivals",
  },
  {
    title: "Collections",
    path: "/collections",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            relative
            flex
            h-16
            items-center
            justify-between
            rounded-full
            border
            border-white/30
            bg-white/30
            px-10
            shadow-2xl
            backdrop-blur-xl
          "
        >

          {/* =========================================
              LEFT NAVIGATION
          ========================================= */}

          <div className="flex items-center gap-10">

            {leftLinks.map((item) => (

              <NavLink
                key={item.title}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => `
                  relative
                  py-2
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  transition-colors
                  duration-300

                  ${
                    isActive
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
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {item.title}
              </NavLink>

            ))}

          </div>


          {/* =========================================
              CENTER LOGO
          ========================================= */}

          <Link
            to="/"
            className="
              absolute
              left-1/2
              -translate-x-1/2
              font-serif
              text-3xl
              tracking-[-0.05em]
              text-[#171717]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            ÉLAN
          </Link>


          {/* =========================================
              RIGHT NAVIGATION
          ========================================= */}

          <div className="flex items-center gap-6">

            {/* ABOUT */}

            <NavLink
              to="/about"
              className={({ isActive }) => `
                relative
                py-2
                text-[12px]
                font-medium
                uppercase
                tracking-[0.12em]
                transition-colors
                duration-300

                ${
                  isActive
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
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              About
            </NavLink>


            {/* WISHLIST */}

            <NavLink
              to="/wishlist"
              aria-label="Wishlist"
              className={({ isActive }) => `
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-[#171717] hover:bg-black/10"
                }
              `}
            >
              <Heart
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </NavLink>


            {/* SHOPPING BAG */}

            <NavLink
              to="/cart"
              aria-label="Shopping Bag"
              className={({ isActive }) => `
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-[#171717] hover:bg-black/10"
                }
              `}
            >
              <ShoppingBag
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </NavLink>


            {/* USER */}

            <NavLink
              to="/profile"
              aria-label="Profile"
              className={({ isActive }) => `
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-[#171717] hover:bg-black/10"
                }
              `}
            >
              <User
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </NavLink>

          </div>

        </div>

      </div>

    </header>
  );
}