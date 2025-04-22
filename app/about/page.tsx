"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { useRef } from "react"

export default function AboutPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

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
              <span>About Us</span>
            </div>
            <h1 className="text-4xl font-bold">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-6">
                  At USP Parking, we're revolutionizing parking in Addis Ababa with advanced, technology-driven
                  solutions. Drawing from decades of experience in the U.S. market, we bring smart, efficient, and
                  customer-friendly parking management services to Ethiopia.
                </p>
                <motion.p
                  className="text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Our mission is to modernize the city's parking infrastructure, making it easier for businesses and
                  individuals to find secure, affordable, and hassle-free parking.
                </motion.p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Key Message / Value Proposition</h2>
              <p className="text-gray-700 text-lg mb-6">
                We're here to transform your parking experience. With our cutting-edge QR code payment system,
                affordable pricing, and time-efficient solutions, parking in Addis Ababa has never been easier. Say
                goodbye to stress and hello to convenience.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <p className="text-gray-700 mb-6">
                Founded in 1998 in the U.S., USP Parking began with a single 30-space parking lot and has since grown
                into a leading parking management firm. Today, we're proud to bring our expertise to Addis Ababa,
                supporting Ethiopia's urban development with modern, secure, and efficient parking solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn direction="left" className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-gray-700 mb-6">
                Our mission is to enhance Ethiopia's urban landscape by providing state-of-the-art parking facilities.
                Through innovative technology like our QR code-based payment system, we eliminate the hassle of cash
                payments and create a seamless, secure parking experience for all.
              </p>
            </FadeIn>
            <FadeIn direction="right" className="md:w-1/2">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Image
                  src="/images/yooo.jpg"
                  alt="Parking Sign"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Background/History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Background/History of USP Parking</h2>
            </FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <FadeIn direction="left" className="md:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/henok-tesfaye.jpeg"
                    alt="Henok Tesfaye, Founder of USP Parking"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </motion.div>
              </FadeIn>
              <FadeIn direction="right" className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-4">Henok Tesfaye, Founder of USP Parking</h3>
                <p className="text-gray-700 mb-4">
                  USP Parking was founded by Henok Tesfaye, who began his journey in parking solutions on the iconic U
                  Street in Washington, D.C. With a vision for modernizing parking infrastructure, Henok has
                  successfully expanded USP Parking's operations from the United States to Ethiopia.
                </p>
                <p className="text-gray-700">
                  Under his leadership, USP Parking has partnered with the Addis Ababa city government to implement
                  innovative parking solutions that address urban congestion and improve the overall parking experience
                  for residents and visitors alike.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Competitive Advantage</h2>
            </FadeIn>
            <ul className="space-y-4">
              {[
                {
                  text: "Advanced QR code payment system eliminating cash transactions",
                  ref: "Our proprietary QR payment technology is used by over 10,000 customers daily",
                },
                {
                  text: "Strategic partnerships with the Addis Ababa city government",
                  ref: "Official partner of the Addis Ababa Traffic Management Agency since 2022",
                },
                {
                  text: "Decades of experience from the U.S. market",
                  ref: "Founded in 1998 with operations in Washington D.C., New York, and Chicago",
                },
                {
                  text: "Flexible payment options based on actual parking duration",
                  ref: "Pay-as-you-go system saves customers an average of 30% on parking costs",
                },
                {
                  text: "24/7 customer support and security monitoring",
                  ref: "Dedicated support team with average response time under 5 minutes",
                },
              ].map((advantage, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div className="flex items-start">
                      <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700 font-medium">{advantage.text}</span>
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          whileHover={{ opacity: 1, height: "auto" }}
                          className="text-sm text-gray-500 mt-1 pl-1 border-l-2 border-usp-red"
                        >
                          {advantage.ref}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Sustainability Commitment</h2>
              <p className="text-gray-700 mb-6">
                At USP Parking, we are committed to environmental sustainability. We are actively working to reduce our
                carbon footprint through eco-friendly practices, such as promoting electric vehicle charging stations
                and implementing energy-efficient lighting solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold mb-6 mt-12">Community Engagement</h2>
              <p className="text-gray-700 mb-6">
                We believe in giving back to the community. USP Parking actively supports local initiatives and
                organizations, contributing to the well-being of the neighborhoods we serve.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
