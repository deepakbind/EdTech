import React from "react";

export default function Companies() {
  const companies = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_Logo.png" },
    { name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flipkart_logo.png" },
    { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
    { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
    { name: "ByteDance", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/ByteDance_Logo.svg" },
    { name: "Intuit", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Intuit_logo.svg" },
    { name: "ServiceNow", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/ServiceNow_logo.svg" },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-white text-center">
      
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-10">
        Launching Careers at{" "}
        <span className="text-blue-600">Top Companies</span>
      </h2>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-50 p-4 rounded-lg hover:shadow-md transition"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}