import { Home, Package, Phone, MessageCircle } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex items-center justify-around py-2">
        {[
          { icon: Home, label: "Home", href: "/" },
          { icon: Package, label: "Products", href: "/products" },
          { icon: Phone, label: "Call", href: "tel:+917380130740" },
          {
            icon: MessageCircle,
            label: "Chat",
            href: "https://wa.me/917380130740",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex flex-col items-center gap-1 px-4 py-1"
          >
            <item.icon className="w-5 h-5 text-gray-600" />
            <span className="text-[10px] text-gray-600">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
