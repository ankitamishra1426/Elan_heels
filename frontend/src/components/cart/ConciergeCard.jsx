import { ShieldCheck } from "lucide-react";

export default function ConciergeCard() {
  return (
    <div className="rounded-2xl bg-white p-7 md:p-8">

      <div className="flex gap-5">

        {/* Icon */}

        <div className="shrink-0">

          <ShieldCheck
            size={20}
            strokeWidth={1.4}
            className="text-[#C7A45A]"
          />

        </div>


        {/* Content */}

        <div>

          <h3 className="text-sm font-medium text-[#171717]">
            ÉLAN Signature Concierge
          </h3>

          <p className="mt-2 text-xs leading-5 text-neutral-500">
            Each piece is hand-inspected and shipped
            in our signature silk-lined boxes with a
            30-day luxury return policy.
          </p>

        </div>

      </div>

    </div>
  );
}