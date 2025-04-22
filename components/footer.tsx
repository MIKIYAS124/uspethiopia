"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <Image src="/images/usp-logo.png" alt="USP Parking Logo" width={150} height={75} className="h-auto" />
            </div>
            <p className="mb-4 text-gray-300">
              Revolutionizing parking in Addis Ababa with advanced, technology-driven solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-usp-red"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "FAQ", href: "/faq" },
                { name: "Available Locations", href: "/locations" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={link.href} className="hover:text-usp-red transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-usp-red" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-usp-red"></span>
            </h3>
            <div className="flex flex-col space-y-3">
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-5 w-5 mr-2 text-usp-red" />
                <a href="tel:6122" className="hover:text-usp-red transition-colors">
                  6122
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-5 w-5 mr-2 text-usp-red" />
                <a href="mailto:contact@uspparking.com" className="hover:text-usp-red transition-colors">
                  contact@uspparking.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-5 w-5 mr-2 text-usp-red" />
                <span>Addis Ababa, Ethiopia</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Clock className="h-5 w-5 mr-2 text-usp-red" />
                <span>Mon-Sun 24Hrs</span>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 USP Parking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
