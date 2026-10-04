import {ArrowUpRight} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
const shopLinks = [
  "New Arrivals",
  "Stilettos",
  "Pumps",
  "Block Heels",
  "Sandals",
];

const helpLinks = [
  "Contact Us",
  "Shipping & Delivery",
  "Returns & Exchanges",
  "Size Guide",
  "FAQ",
];

const aboutLinks = [
  "Our Story",
  "Craftsmanship",
  "Journal",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">

            {/* Logo */}
            <a
              href="/"
              className="
                font-serif
                text-4xl
                tracking-[0.12em]
                text-white
                transition-opacity
                hover:opacity-70
              "
            >
              ÉLAN
            </a>

            <p
              className="
                mt-6
                max-w-xs
                text-sm
                leading-7
                text-neutral-400
              "
            >
              Elevating every step through timeless silhouettes,
              refined craftsmanship, and effortless femininity.
            </p>

         
{/* Social Icons */}
<div className="mt-8 flex items-center gap-3">

  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-white/15
      text-neutral-400
      transition-all duration-300
      hover:border-[#C7A45A]
      hover:bg-[#C7A45A]
      hover:text-[#171717]
    "
  >
    <FaInstagram size={15} />
  </a>

  {/* Facebook */}
  <a
    href="#"
    aria-label="Facebook"
    className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-white/15
      text-neutral-400
      transition-all duration-300
      hover:border-[#C7A45A]
      hover:bg-[#C7A45A]
      hover:text-[#171717]
    "
  >
    <FaFacebookF size={14} />
  </a>

  {/* Pinterest */}
  <a
    href="#"
    aria-label="Pinterest"
    className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-white/15
      text-neutral-400
      transition-all duration-300
      hover:border-[#C7A45A]
      hover:bg-[#C7A45A]
      hover:text-[#171717]
    "
  >
    <FaPinterestP size={15} />
  </a>

  {/* TikTok */}
  <a
    href="#"
    aria-label="TikTok"
    className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-white/15
      text-neutral-400
      transition-all duration-300
      hover:border-[#C7A45A]
      hover:bg-[#C7A45A]
      hover:text-[#171717]
    "
  >
    <FaTiktok size={14} />
  </a>

</div>

          </div>

          {/* Shop */}
          <FooterColumn
            title="Shop"
            links={shopLinks}
          />

          {/* Customer Care */}
          <FooterColumn
            title="Customer Care"
            links={helpLinks}
          />

          {/* About */}
          <FooterColumn
            title="About ÉLAN"
            links={aboutLinks}
          />

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-5
            px-6
            py-7
            md:flex-row
            md:items-center
            md:justify-between
            md:px-10
            lg:px-16
          "
        >

          {/* Copyright */}
          <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-500">
            © {new Date().getFullYear()} ÉLAN Heels. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6">

            <a
              href="#"
              className="
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-neutral-500
                transition-colors
                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-neutral-500
                transition-colors
                hover:text-white
              "
            >
              Terms & Conditions
            </a>

          </div>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex
              items-center
              gap-2
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-neutral-500
              transition-colors
              hover:text-white
            "
          >
            Back to top

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
            />

          </button>

        </div>

      </div>

    </footer>
  );
}


/* -------------------------------- */
/* Footer Column Component          */
/* -------------------------------- */

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3
        className="
          mb-6
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-[#C7A45A]
        "
      >
        {title}
      </h3>

      <ul className="space-y-4">

        {links.map((link) => (
          <li key={link}>

            <a
              href="#"
              className="
                inline-block
                text-sm
                text-neutral-400
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-white
              "
            >
              {link}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}