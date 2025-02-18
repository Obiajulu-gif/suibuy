import { Truck, HeadphonesIcon, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: RefreshCw,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
]

export function Services() {
  return (
    (<section className="py-16 bg-gradient-to-r from-[#000c24] to-[#001e4d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-blue rounded-full mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

