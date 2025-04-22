"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { HelpCircle, Search, Phone, Mail, MapPin, Clock } from "lucide-react"

const faqs = [
  {
    question: "What is 'Pay by Time: Flexible Parking'?",
    answer:
      "Our Pay by Time system lets you pay for parking based on the exact duration you need. It's flexible, convenient, and cost-effective.",
  },
  {
    question: "How do I pay for parking?",
    answer:
      "Scan the QR code at the parking spot using your smartphone, enter your phone number, plate number, your desired duration, and pay securely online—no cash or cards required.",
  },
  {
    question: "Can I extend my parking if needed?",
    answer: "The system will send you a time extender link.",
  },
  {
    question: "How do I know how much I'll be charged?",
    answer:
      "Before confirming your payment, you'll see the pricing for your selected duration. Hourly and daily rates are clearly displayed.",
  },
  {
    question: "What happens if I exceed my parking time?",
    answer:
      "You'll receive a reminder to extend your session. Avoid fines by paying for additional time through the app or QR code.",
  },
  {
    question: "Is my vehicle secure while parked?",
    answer:
      "Our team of professionals are always giving the utmost attention to the safety of your vehicles. Our team will communicate with law enforcement if they see any wrongdoing.",
  },
  {
    question: "Can I park for the whole day even if I don't need the space all day?",
    answer: "Yes, you can reserve a spot for the entire day by paying the full-day rate.",
  },
  {
    question: "How do I contact customer support?",
    answer: "Reach out via the Contact Us page or the Support section of the app. We're here to help!",
  },
  {
    question: "Is USP Parking available in other cities?",
    answer: "Currently, we operate in Addis Ababa, but stay tuned for expansions to more cities.",
  },
  {
    question: "Is cash payment accepted?",
    answer: "Cash payment is considered theft/bribe. Strictly follow the QR code and make the payments online.",
  },
  {
    question: "What if I don't have a smartphone?",
    answer: "Our parking attendants will support you on the spot.",
  },
]

// FAQ Item component to handle individual animations
const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
        <motion.div whileHover={{ backgroundColor: "#f9fafb" }} transition={{ duration: 0.2 }}>
          <AccordionTrigger className="text-left font-medium py-4 px-6 hover:no-underline">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-usp-red mr-3 flex-shrink-0" />
              <span>{faq.question}</span>
            </div>
          </AccordionTrigger>
        </motion.div>
        <AccordionContent className="text-gray-700 pb-4 px-6 pt-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {faq.answer}
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  )
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
              <span>FAQ</span>
            </div>
            <h1 className="text-4xl font-bold">Frequently Asked Questions (FAQ)</h1>
            <p className="mt-4">
              Find answers to the most common questions about our parking services and payment system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="relative mb-8">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search questions..."
                      className="w-full p-4 border border-gray-300 rounded-lg pr-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </Accordion>
            </FadeIn>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <motion.p
                  className="text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  No questions found matching your search.
                </motion.p>
              </div>
            )}
          </div>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto mt-16 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Contact Us:</h2>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Phone className="h-5 w-5 text-usp-red mr-3" />
                  <a href="tel:6122" className="hover:text-usp-red transition-colors">
                    6122
                  </a>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Mail className="h-5 w-5 text-usp-red mr-3" />
                  <a href="mailto:contact@uspparking.com" className="hover:text-usp-red transition-colors">
                    contact@uspparking.com
                  </a>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <MapPin className="h-5 w-5 text-usp-red mr-3" />
                  <span>Addis Ababa, Ethiopia</span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Clock className="h-5 w-5 text-usp-red mr-3" />
                  <span>Operating Hours: Mon - Sun 24Hrs</span>
                </motion.li>
              </ul>
              <div className="mt-6">
                <h3 className="font-semibold">Privacy Policy:</h3>
                <p className="text-gray-600 text-sm mt-2">
                  This is important to show users how their personal data is protected.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
