import { useState } from "react";
import { Pencil, Mail, Phone, CalendarDays } from "lucide-react";

export default function ProfileOverview() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    firstName: "Ankita",
    lastName: "Mishra",
    email: "ankita@example.com",
    phone: "+91 98765 43210",
    birthday: "15 August 2004",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="space-y-8">
      {/* Profile Card */}
      <div className="rounded-3xl border border-[#DDD6CE] bg-white p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-[#E7E1DA] pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#A88952]">
              Personal Details
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#171717]">
              My Profile
            </h2>
          </div>

          <button
            onClick={() => setEditing(!editing)}
            className="flex items-center justify-center gap-2 rounded-full border border-[#CFC7BE] px-5 py-3 text-xs uppercase tracking-[0.15em] transition hover:bg-[#171717] hover:text-white"
          >
            <Pencil className="h-4 w-4" />

            {editing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Form */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ProfileInput
            label="First Name"
            name="firstName"
            value={user.firstName}
            editing={editing}
            onChange={handleChange}
          />

          <ProfileInput
            label="Last Name"
            name="lastName"
            value={user.lastName}
            editing={editing}
            onChange={handleChange}
          />

          <ProfileInput
            label="Email Address"
            name="email"
            value={user.email}
            editing={editing}
            onChange={handleChange}
            icon={<Mail className="h-4 w-4" />}
          />

          <ProfileInput
            label="Phone Number"
            name="phone"
            value={user.phone}
            editing={editing}
            onChange={handleChange}
            icon={<Phone className="h-4 w-4" />}
          />

          <ProfileInput
            label="Date of Birth"
            name="birthday"
            value={user.birthday}
            editing={editing}
            onChange={handleChange}
            icon={<CalendarDays className="h-4 w-4" />}
          />
        </div>
      </div>

      {/* Account Summary */}
      <div className="grid gap-5 sm:grid-cols-3">
        <SummaryCard
          number="08"
          label="Orders"
        />

        <SummaryCard
          number="04"
          label="Wishlist"
        />

        <SummaryCard
          number="02"
          label="Addresses"
        />
      </div>
    </section>
  );
}

function ProfileInput({
  label,
  name,
  value,
  editing,
  onChange,
  icon,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}

        <input
          type="text"
          name={name}
          value={value}
          disabled={!editing}
          onChange={onChange}
          className={`w-full rounded-2xl border border-[#DDD6CE] bg-[#F9F6F3] px-4 py-3.5 text-sm text-[#171717] outline-none transition ${
            icon ? "pl-11" : ""
          } ${
            editing
              ? "focus:border-[#A88952] focus:bg-white"
              : "cursor-default"
          }`}
        />
      </div>
    </div>
  );
}

function SummaryCard({ number, label }) {
  return (
    <div className="rounded-3xl border border-[#DDD6CE] bg-white p-6">
      <p className="font-serif text-3xl text-[#171717]">
        {number}
      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </p>
    </div>
  );
}