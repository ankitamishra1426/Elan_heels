import {
  Award,
  Package,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const services = [
  {
    icon: Award,
    title: "PREMIUM QUALITY",
    description:
      "Handcrafted in Italy using the finest ethically sourced leathers.",
  },
  {
    icon: Package,
    title: "FAST DELIVERY",
    description:
      "Global priority shipping for our elite clientele in 3-5 days.",
  },
  {
    icon: ShieldCheck,
    title: "SECURE PAYMENT",
    description:
      "PCI-compliant checkout with end-to-end encryption for safety.",
  },
  {
    icon: RefreshCcw,
    title: "EASY RETURNS",
    description:
      "Complimentary returns and exchanges within 30 days of purchase.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#f5f2ef] py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="rounded-3xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center px-8 py-10 text-center">
                  <div className="mb-6">
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="text-[#c8a15a]"
                    />
                  </div>

                  <h3 className="mb-5 text-xs font-semibold tracking-[0.25em] text-gray-900">
                    {service.title}
                  </h3>

                  <p className="max-w-[180px] text-[15px] leading-7 text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;