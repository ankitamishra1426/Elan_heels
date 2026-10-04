import { useState } from "react";
import {
  UserRound,
  Package,
  MapPin,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    id: "profile",
    label: "Profile",
    icon: UserRound,
  },
  {
    id: "orders",
    label: "My Orders",
    icon: Package,
  },
  {
    id: "addresses",
    label: "Addresses",
    icon: MapPin,
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function ProfileSidebar() {
  const [activeItem, setActiveItem] = useState("profile");

  return (
    <aside className="h-fit rounded-3xl border border-[#DDD6CE] bg-white p-4">
      {/* User */}
      <div className="mb-5 flex items-center gap-4 border-b border-[#E7E1DA] px-3 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE8E1]">
          <UserRound className="h-5 w-5 text-[#A88952]" />
        </div>

        <div>
          <p className="font-serif text-lg text-[#171717]">
            Ankita
          </p>

          <p className="text-xs text-neutral-500">
            ankita@example.com
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${
                isActive
                  ? "bg-[#171717] text-white"
                  : "text-neutral-600 hover:bg-[#F9F6F3] hover:text-[#171717]"
              }`}
            >
              <Icon className="h-4 w-4" />

              <span>{item.label}</span>
            </button>
          );
        })}

        <button className="mt-4 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm text-red-500 transition hover:bg-red-50">
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}