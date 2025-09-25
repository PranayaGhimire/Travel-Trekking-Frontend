import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="py-20 font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url('/images/mountainImage.webp)`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-800 bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Crafting unforgettable journeys across breathtaking landscapes.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <p className="text-lg text-center mb-12 leading-relaxed">
          Welcome to <span className="font-semibold text-teal-600">Adventure Trails</span> — 
          your trusted partner in exploring the majestic Himalayas and beyond.
          Our love for the mountains drives us to create trekking and travel
          experiences that are as inspiring as they are unforgettable.
        </p>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <Image width={290} height={250}
            src="/images/trekkingTeam.webp" 
            alt="Our Trekking Team"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-teal-600">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              We believe that travel is more than just visiting places — it’s
              about connecting with the land, the people, and the culture. Our
              mission is to provide authentic and sustainable travel
              experiences that leave you with lasting memories while supporting
              local communities.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-teal-600">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expert local guides with years of experience</li>
            <li>Customizable trekking and travel itineraries</li>
            <li>Commitment to eco-friendly and sustainable tourism</li>
            <li>24/7 support throughout your journey</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
