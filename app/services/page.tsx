"use client"

import Image from "next/image"
import { QrCode, Clock, MapPin, Timer, Link2, Calendar } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function ServicesPage() {
  return (
    <div>
      <ScrollProgress />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm mb-4">
              <a href="/" className="hover:text-red-400">
                Home
              </a>
              <span>&gt;</span>
              <span>Services</span>
            </div>
            <h1 className="text-4xl font-bold">Our Services</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-block p-4 bg-red-100 rounded-full mb-6"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-3xl text-red-700">🅿️</span>
                </div>
              </motion.div>
              <h2 className="text-3xl font-bold mb-6">Our Service</h2>
              <p className="text-gray-700 text-lg mb-6">
                Discover our comprehensive parking solutions designed to make your experience seamless and convenient.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PPP Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Public-Private Partnership (PPP) for Parking Digitization</h2>
              <h3 className="text-xl font-semibold mb-6">Transforming Addis Ababa's Parking Infrastructure</h3>
              <p className="text-gray-700 mb-6">
                USP Parking has officially partnered with the Mayor's Office of Addis Ababa and the Traffic Management
                Agency to lead the city-wide parking digitization project. This initiative is part of the government's
                broader effort to modernize urban mobility, reduce congestion, and create a seamless parking experience
                for residents and visitors.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <QrCode className="h-8 w-8 text-red-700" />,
                title: "Cashless Payment System",
                description:
                  "Say goodbye to cash and payment machines. Our QR code-based system lets you pay securely and instantly online. Simply scan, pay, and park—no hassle, no stress.",
                delay: 0.1,
              },
              {
                icon: <Clock className="h-8 w-8 text-red-700" />,
                title: "Pay by Time: Flexible Parking Solutions",
                description:
                  "Only pay for the time you need. Whether it's an hour or a full day, our flexible system ensures cost-effective and convenient parking.",
                delay: 0.2,
              },
              {
                icon: <MapPin className="h-8 w-8 text-red-700" />,
                title: "Comfortable & Convenient Parking Spaces",
                description:
                  "We provide well-managed parking spaces in the heart of Addis Ababa. Whether you're heading to work, shopping, or dining out, our facilities ensure a safe and accessible spot for your vehicle.",
                delay: 0.3,
              },
              {
                icon: <Timer className="h-8 w-8 text-red-700" />,
                title: "Time-Efficient Parking",
                description:
                  "Time is precious. With real-time parking availability and streamlined payment systems, you can find a spot, park, and go in minutes. Our QR based system makes the process even faster.",
                delay: 0.4,
              },
              {
                icon: <Link2 className="h-8 w-8 text-red-700" />,
                title: "Seamless Integration with City Service",
                description:
                  "Ensuring interoperability with existing transport systems, urban mobility plans, and traffic control measures.",
                delay: 0.5,
              },
              {
                icon: <Calendar className="h-8 w-8 text-red-700" />,
                title: "Pre-Booking",
                description:
                  "Have peace of mind by booking your parking space in advance before heading to your destination.",
                delay: 0.6,
              },
            ].map((service, index) => (
              <FadeIn key={index} delay={service.delay}>
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cashless Payment Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn direction="left" className="md:w-1/2">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Image
                  src="/images/payment-sign.jpeg"
                  alt="QR Code Payment"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            </FadeIn>
            <FadeIn direction="right" className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Cashless Payment System</h2>
              <p className="text-gray-700 mb-6">
                Our innovative QR code-based payment system revolutionizes how you pay for parking in Addis Ababa. No
                more fumbling for cash or waiting in line at payment machines.
              </p>
              <p className="text-gray-700 mb-6">
                Simply scan the QR code at your parking spot with your smartphone, enter your vehicle details and
                desired parking duration, and complete the payment securely online. The entire process takes less than a
                minute.
              </p>
              <p className="text-gray-700 mb-6">
                Our system supports multiple payment methods, ensuring convenience for all users. Plus, you'll receive
                digital receipts and parking expiration reminders directly to your phone.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pay by Time Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <FadeIn direction="right" className="md:w-1/2">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Image
                  src="/images/qr-code-sign.jpeg"
                  alt="Pay by Time"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Pay by Time: Flexible Parking Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our Pay by Time system is designed with flexibility in mind. Why pay for a full day when you only need
                an hour? With USP Parking, you only pay for the exact time you use.
              </p>
              <p className="text-gray-700 mb-6">
                Choose from hourly, half-day, or full-day options based on your needs. Our transparent pricing ensures
                you always know exactly what you're paying for.
              </p>
              <p className="text-gray-700 mb-6">
                Need to extend your stay? No problem. You can easily add more time through our mobile platform without
                returning to your vehicle.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
