import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
const footer = [
  {
    h3: "Quick Links",
    links: ["About us", "Package", "Instructor"],
  },
  {
    h3: "Support",
    links: ["FAQ", "Contact", "Terms of Service"],
  },
  {
    h3: "Contact us",
    links: [
      { text: "Phone", icon: <Phone size={20} strokeWidth={1} /> },
      { text: "Email", icon: <Mail size={20} strokeWidth={1} /> },
      { text: "Address", icon: <MapPin size={20} strokeWidth={1} /> },
    ],
  },
];

function FooterEl() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {footer.map((column, index) => (
        <div key={index}>
          <h3 className="font-bold text-base sm:text-lg lg:text-lg mb-4 text-gray-900">
            {column.h3}
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                {typeof link === "string" ? (
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 block"
                  >
                    {link}
                  </a>
                ) : (
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>{link.icon}</span>
                    <span>{link.text}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterEl;
