"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, QrCode, MapPin, Clock, Star, Car, CreditCard, Shield, Smartphone, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { useRef } from "react"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />

      {/* Hero Section */}
      <section ref={ref} className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 gradient-animation">
          <Image
            src="/images/building.webp"
            alt="Addis Ababa Skyline"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        </div>
        <motion.div className="container mx-auto px-4 py-20 md:py-32 relative z-10" style={{ opacity, scale, y }}>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4 inline-block bg-usp-red px-4 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="font-bold">25 YEARS OF EXCELLENCE</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Providing Unparalleled Service & Expertise For Over 20 Years
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <AnimatedButton variant="3d" className="px-8 py-3 rounded-md inline-block transition-colors font-medium">
                <Link href="/about">Read More</Link>
              </AnimatedButton>
            </motion.div>
            <motion.div
              className="mt-16 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <span className="mr-2">Scroll to explore</span>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn delay={0.1}>
              <div className="counter-wrapper">
                <h3 className="text-4xl font-bold text-usp-red mb-2">
                  <AnimatedCounter from={0} to={12} />
                </h3>
                <p className="text-gray-600">Parking Locations</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="counter-wrapper">
                <h3 className="text-4xl font-bold text-usp-red mb-2">
                  <AnimatedCounter from={0} to={1000} suffix="+" />
                </h3>
                <p className="text-gray-600">Parking Spaces</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="counter-wrapper">
                <h3 className="text-4xl font-bold text-usp-red mb-2">
                  <AnimatedCounter from={0} to={25} />
                </h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="counter-wrapper">
                <h3 className="text-4xl font-bold text-usp-red mb-2">
                  <AnimatedCounter from={0} to={24} suffix="/7" />
                </h3>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Discover our comprehensive parking solutions designed to make your experience seamless and convenient.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <AnimatedCard className="bg-gray-50 p-8 rounded-lg shadow-sm text-center h-full">
                <div className="feature-icon-container">
                  <MapPin className="feature-icon" />
                </div>
                <h3 className="text-xl font-bold mb-4">Available Location</h3>
                <p className="text-gray-600 mb-6">
                  Find convenient parking spots across Addis Ababa at strategic locations.
                </p>
                <Link
                  href="/locations"
                  className="text-usp-red font-medium hover:text-usp-red-dark transition-colors animated-underline"
                >
                  View Locations
                </Link>
              </AnimatedCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <AnimatedCard className="bg-gray-50 p-8 rounded-lg shadow-sm text-center h-full">
                <div className="feature-icon-container">
                  <QrCode className="feature-icon" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pay with QR code</h3>
                <p className="text-gray-600 mb-6">Scan, pay, and park with our convenient QR code payment system.</p>
                <Link
                  href="/services"
                  className="text-usp-red font-medium hover:text-usp-red-dark transition-colors animated-underline"
                >
                  Learn More
                </Link>
              </AnimatedCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <AnimatedCard className="bg-gray-50 p-8 rounded-lg shadow-sm text-center h-full">
                <div className="feature-icon-container">
                  <Clock className="feature-icon" />
                </div>
                <h3 className="text-xl font-bold mb-4">Find Parking</h3>
                <p className="text-gray-600 mb-6">Quickly locate available parking spaces near your destination.</p>
                <Link
                  href="/locations"
                  className="text-usp-red font-medium hover:text-usp-red-dark transition-colors animated-underline"
                >
                  Find Now
                </Link>
              </AnimatedCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn direction="left" className="md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src="/images/uspp.jpg"
                  alt="USP Parking Building"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </FadeIn>
            <FadeIn direction="right" className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                About Us
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-usp-red"></span>
              </h2>
              <p className="text-gray-700 mb-6">
                At USP Parking, we're revolutionizing parking in Addis Ababa with advanced, technology-driven solutions.
                Drawing from decades of experience in the U.S. market, we bring smart, efficient, and customer-friendly
                parking management services to Ethiopia.
              </p>
              <p className="text-gray-700 mb-8">
                Our mission is to modernize the city's parking infrastructure, making it easier for businesses and
                individuals to find secure, affordable, and hassle-free parking.
              </p>
              <AnimatedButton variant="3d" className="px-6 py-3 rounded-md inline-block transition-colors">
                <Link href="/about">Read More</Link>
              </AnimatedButton>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Why Choose USP Parking</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              We offer a range of benefits that make us the preferred parking solution in Addis Ababa
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-usp-red-light p-3 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-usp-red" />
                  </div>
                  <h3 className="font-bold">Secure Parking</h3>
                </div>
                <p className="text-gray-600">
                  All our parking locations are monitored 24/7 with security cameras for your peace of mind.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-usp-red-light p-3 rounded-full mr-3">
                    <CreditCard className="h-5 w-5 text-usp-red" />
                  </div>
                  <h3 className="font-bold">Cashless Payments</h3>
                </div>
                <p className="text-gray-600">
                  Our QR code payment system eliminates the need for cash, making transactions quick and convenient.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-usp-red-light p-3 rounded-full mr-3">
                    <Car className="h-5 w-5 text-usp-red" />
                  </div>
                  <h3 className="font-bold">Strategic Locations</h3>
                </div>
                <p className="text-gray-600">
                  Our parking spots are strategically located near major business centers, shopping areas, and
                  attractions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-usp-red-light p-3 rounded-full mr-3">
                    <Smartphone className="h-5 w-5 text-usp-red" />
                  </div>
                  <h3 className="font-bold">Mobile App</h3>
                </div>
                <p className="text-gray-600">
                  Our mobile app makes it easy to find, book, and pay for parking spaces from your smartphone.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Our simple 3-step process makes parking easier than ever before
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

            <FadeIn delay={0.1}>
              <div className="step-card relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <motion.div
                  className="w-16 h-16 rounded-full bg-usp-red text-white flex items-center justify-center text-xl font-bold mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  1
                </motion.div>
                <h3 className="text-xl font-bold mb-4">Find a Parking Spot</h3>
                <p className="text-gray-600">
                  Use our app or website to locate a convenient USP Parking location near your destination in Addis
                  Ababa.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="step-card relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <motion.div
                  className="w-16 h-16 rounded-full bg-usp-red text-white flex items-center justify-center text-xl font-bold mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  2
                </motion.div>
                <h3 className="text-xl font-bold mb-4">Scan QR Code</h3>
                <p className="text-gray-600">
                  Use your smartphone to scan the QR code at the parking spot and enter your details.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="step-card relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <motion.div
                  className="w-16 h-16 rounded-full bg-usp-red text-white flex items-center justify-center text-xl font-bold mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  3
                </motion.div>
                <h3 className="text-xl font-bold mb-4">Pay & Park</h3>
                <p className="text-gray-600">
                  Complete your payment securely online and enjoy hassle-free parking for your chosen duration.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-gray-600">Hear from people who have experienced our parking solutions</p>
              <div className="fancy-divider"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm testimonial-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "USP Parking has made finding parking spots near my business so much easier for my customers. The QR
                  payment system is incredibly convenient."
                </p>
                <div className="flex items-center">
                  <div className="testimonial-avatar mr-3">A</div>
                  <div>
                    <p className="font-bold">Abebe Kebede</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm testimonial-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "I use USP Parking every day for work. The ability to pay only for the time I need has saved me so
                  much money compared to traditional parking."
                </p>
                <div className="flex items-center">
                  <div className="testimonial-avatar mr-3">S</div>
                  <div>
                    <p className="font-bold">Sara Haile</p>
                    <p className="text-gray-600">Regular Commuter</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm testimonial-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "As someone visiting Addis Ababa, finding parking used to be stressful. USP's clear signage and easy
                  payment system made my trip much more enjoyable."
                </p>
                <div className="flex items-center">
                  <div className="testimonial-avatar mr-3">D</div>
                  <div>
                    <p className="font-bold">Daniel Mekonnen</p>
                    <p className="text-gray-600">Visitor to Addis</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white gradient-animation">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Parking Experience?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have simplified their parking with USP Parking's innovative
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="glow">
                <Link href="/locations" className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Parking Now
                </Link>
              </AnimatedButton>
              <AnimatedButton variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Link href="/contact" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
