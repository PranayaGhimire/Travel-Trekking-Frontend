import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const ContactUsPage = () => {
  const FAQS = [
    {
      trigger:"What makes your company different from other travel agencies?",
      content:`We specialize exclusively in adventure travel and trekking. Our
                guides are certified experts in their regions, our itineraries
                are designed for immersive experiences, and we maintain a strong
                commitment to sustainable and responsible tourism. We don't just
                sell trips; we create unforgettable adventures.`
    },
    {
      trigger:"How far in advance should I book my trek or tour?",
      content:` We recommend booking at least 3-6 months in advance, especially
              for popular destinations and peak seasons (like spring and autumn
              for the Himalayas). This ensures availability for permits,
              flights, and the best guides. Last-minute bookings are sometimes
              possible, so please contact us.`
    },
    {
      trigger:"Who will be guiding us on the trek?",
      content:` You will be led by our experienced, local, and certified guides
              who are fluent in English and have extensive knowledge of the
              terrain, culture, and first aid. They are passionate about sharing
              their homeland with you.`
    },
    {
      trigger:"What are the accommodation and food like?",
      content:`This depends on the trek. On camping treks, we provide
              high-quality tents and a dedicated kitchen crew who prepare
              nutritious and hearty meals. On teahouse/lodge treks, you'll stay
              in family-run lodges with basic, shared facilities and eat meals
              from their menus.`
    }
  ]
  return (
    <div className="py-20 font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          height: "40vh",
          backgroundImage: "url('/images/contact-hero.jpg')", // ✅ Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-800 bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            We’d love to hear from you — let’s plan your next adventure!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-teal-600 mb-4">
            Get in Touch
          </h2>
          <p className="mb-6">
            Have questions about our treks or need help planning your trip?
            Reach out to us anytime and our friendly team will assist you.
          </p>

          <div className="space-y-4">
            <p className="flex gap-2">
              <span className="flex gap-2 items-center font-semibold">
                <FaLocationDot className="text-teal-600" /> Address:
              </span>{" "}
              Bharatpur-26, Chitwan, Nepal
            </p>
            <p className="flex gap-2">
              <span className="flex gap-2 items-center font-semibold">
                <FaPhone className="text-teal-600" /> Phone:
              </span>{" "}
              +977-9840505684
            </p>
            <p className="flex gap-2">
              <span className="flex gap-2 items-center font-semibold">
                <MdEmail className="text-teal-600" /> Email:
              </span>{" "}
              pranayaghimire88083@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-teal-700">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white cursor-pointer p-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-teal-600">Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14140.880058681381!2d84.25297018715818!3d27.617701800000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994f7ffa328e6cb%3A0x2bf4791979cfe32d!2sJyotinagar%20Bus%20Stop!5e0!3m2!1sen!2snp!4v1755163010711!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-120"
        ></iframe>
      </div>
      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-teal-600">Frequently Asked Questions (FAQs)</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full bg-white p-3 rounded-lg space-y-2"
          defaultValue="item-1"
        >
          {FAQS.map((FAQ,index) => 
              <AccordionItem key={index} value={`item-${index+1}`}>
                  <AccordionTrigger className="bg-teal-200 px-2">
                      {FAQ.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-balance">
                      {FAQ.content}
                  </AccordionContent>
              </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default ContactUsPage;
