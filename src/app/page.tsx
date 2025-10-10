
import DestinationsCarousel from "@/components/DestinationsCarousel";
import { Card } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import React from "react";


const HomePage = () => {


  return (
    <div className="py-20 font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/hero-trekking.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-800 bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">
            Explore the Majestic Himalayas
          </h1>
          <p className="text-lg mb-6">
            Your adventure starts here — unforgettable treks, breathtaking
            views, and lifelong memories.
          </p>
          <button  
          className="bg-teal-600 hover:bg-teal-700 text-white cursor-pointer px-6 py-3 rounded-lg font-semibold shadow-lg transition">
            <Link href={`/destinations`}>Start Your Journey</Link>
          </button>
        </div>
      </div>

      {/* Destinations Carousel */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-600">
          Popular Treks & Destinations
        </h2>
        <DestinationsCarousel/>
      </div>

      {/* Why Choose Us */}
      <div className=" py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-600">
          Why Travel With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Local Guides",
              desc: "Experienced guides who know every trail and hidden gem.",
            },
            {
              title: "Custom Itineraries",
              desc: "Personalized adventures tailored to your preferences.",
            },
            {
              title: "Eco-Friendly Travel",
              desc: "Sustainable tourism that supports local communities.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border-0"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-600">
          What Our Travelers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John D.",
              text: "The Everest trek was life-changing! Highly recommend Adventure Trails.",
              photo:"https://randomuser.me/portraits/men/24.jpg"
            },
            {
              name: "Sarah M.",
              text: "Professional guides and stunning routes. I’ll be back for another trek!",
              photo:"https://randomuser.me/portraits/women/26.jpg"
            },
            {
              name: "Alex K.",
              text: "Best travel experience ever — everything was perfectly organized.",
              photo:"https://randomuser.me/portraits/men/28.jpg"
            },
          ].map((review, index) => (
            <Card key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-white border-0">
              <p className="italic mb-4">"{review.text}"</p>
              <div className="flex flex-col justify-center items-center gap-2">
                   <Image src={review.photo} alt="" width={80} height={80} className="rounded-full"/>
                    <p className="font-semibold text-teal-600">— {review.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Begin Your Adventure?
        </h2>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
          <Link href="/contactUs">Contact Us Today</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
