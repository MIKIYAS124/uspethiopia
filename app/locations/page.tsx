"use client"

import { useState } from "react"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const locations = [
  {
    id: 1,
    name: "Friendship",
    address: "Friendship Road, Addis Ababa",
    hours: "24/7",
    spaces: 45,
  },
  {
    id: 2,
    name: "Holy City Center",
    address: "Holy City Center, Addis Ababa",
    hours: "24/7",
    spaces: 60,
  },
  {
    id: 3,
    name: "Gast Mall",
    address: "Gast Mall, Addis Ababa",
    hours: "6:00 AM - 11:00 PM",
    spaces: 120,
  },
  {
    id: 4,
    name: "Mercy Plaza",
    address: "Mercy Plaza, Addis Ababa",
    hours: "24/7",
    spaces: 80,
  },
  {
    id: 5,
    name: "Minarol",
    address: "Minarol Area, Addis Ababa",
    hours: "24/7",
    spaces: 50,
  },
  {
    id: 6,
    name: "Stadium",
    address: "Stadium Area, Addis Ababa",
    hours: "6:00 AM - 11:00 PM",
    spaces: 200,
  },
  {
    id: 7,
    name: "Arat Kilo Ambassador Mall",
    address: "Arat Kilo, Addis Ababa",
    hours: "7:00 AM - 10:00 PM",
    spaces: 90,
  },
  {
    id: 8,
    name: "Zenebech Building",
    address: "Zenebech Building, Addis Ababa",
    hours: "24/7",
    spaces: 40,
  },
  {
    id: 9,
    name: "Kera",
    address: "Kera, Addis Ababa",
    hours: "24/7",
    spaces: 65,
  },
  {
    id: 10,
    name: "Rwanda Bridge",
    address: "Rwanda Bridge, Addis Ababa",
    hours: "24/7",
    spaces: 55,
  },
  {
    id: 11,
    name: "Kazanchis",
    address: "Kazanchis, Addis Ababa",
    hours: "24/7",
    spaces: 70,
  },
  {
    id: 12,
    name: "Genfile",
    address: "Genfile, Addis Ababa",
    hours: "6:00 AM - 11:00 PM",
    spaces: 60,
  },
]

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <ScrollProgress />

      {/* Hero Section */}
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-sm mb-4">
              <a href="/" className="hover:text-usp-red">
                Home
              </a>
              <span>&gt;</span>
              <span>Available Locations</span>
            </div>
            <h1 className="text-4xl font-bold">Available Locations</h1>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="relative mb-8">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <input
                    type="text"
                    placeholder="Search for locations by name or address..."
                    className="w-full p-4 border border-gray-300 rounded-lg pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredLocations.map((location, index) => (
                  <FadeIn key={location.id} delay={index * 0.05}>
                    <motion.div
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border-t-2 border-usp-red"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{location.address}</p>
                      <div className="flex items-center text-sm text-gray-700 mb-2">
                        <Clock className="h-4 w-4 mr-2 text-usp-red" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex justify-end">
                        <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
                          {location.spaces} spaces
                        </span>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>

              {filteredLocations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No locations found matching your search.</p>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
