"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Send,
  Clock,
  User,
  AtSign,
  MessageSquare,
  HelpCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
    // Clear error when user selects
    if (errors.subject) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.subject
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("submitting")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }
  }

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
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <FadeIn direction="left" className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-bold mb-6 relative inline-block">
                    Get In Touch
                    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-usp-red"></span>
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Have questions about our parking services? Need assistance with a payment? Or perhaps you'd like to
                    suggest a new parking location? We're here to help! Fill out the form, and our team will get back to
                    you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-usp-red mr-2" />
                        <label className="text-sm font-medium">Your Name</label>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={errors.name ? "animate-shake" : ""}
                      >
                        <Input
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                          disabled={formStatus === "submitting"}
                        />
                      </motion.div>
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <AtSign className="h-4 w-4 text-usp-red mr-2" />
                        <label className="text-sm font-medium">Email Address</label>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={errors.email ? "animate-shake" : ""}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                          disabled={formStatus === "submitting"}
                        />
                      </motion.div>
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Phone className="h-4 w-4 text-usp-red mr-2" />
                        <label className="text-sm font-medium">Phone Number</label>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={errors.phone ? "animate-shake" : ""}
                      >
                        <Input
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? "border-red-500" : ""}
                          disabled={formStatus === "submitting"}
                        />
                      </motion.div>
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <HelpCircle className="h-4 w-4 text-usp-red mr-2" />
                        <label className="text-sm font-medium">Subject</label>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={errors.subject ? "animate-shake" : ""}
                      >
                        <Select
                          onValueChange={handleSelectChange}
                          value={formData.subject}
                          disabled={formStatus === "submitting"}
                        >
                          <SelectTrigger className={errors.subject ? "border-red-500" : ""}>
                            <SelectValue placeholder="What is this regarding?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="payment">Payment Issue</SelectItem>
                            <SelectItem value="suggestion">Suggestion</SelectItem>
                            <SelectItem value="partnership">Business Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-4 w-4 text-usp-red mr-2" />
                        <label className="text-sm font-medium">Your Message</label>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={errors.message ? "animate-shake" : ""}
                      >
                        <Textarea
                          name="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={errors.message ? "border-red-500" : ""}
                          disabled={formStatus === "submitting"}
                        />
                      </motion.div>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <AnimatedButton
                      type="submit"
                      variant="3d"
                      className="w-full"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </AnimatedButton>

                    <AnimatePresence>
                      {formStatus === "success" && (
                        <motion.div
                          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span>Thank you! Your message has been sent successfully.</span>
                        </motion.div>
                      )}

                      {formStatus === "error" && (
                        <motion.div
                          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <AlertCircle className="h-5 w-5 mr-2" />
                          <span>There was an error sending your message. Please try again.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </FadeIn>

              <FadeIn direction="right" className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-bold mb-6 relative inline-block">
                    Contact Information
                    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-usp-red"></span>
                  </h2>

                  <div className="mb-8">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src="/images/mnm.jpg"
                        alt="USP Parking Building"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-usp-red-light p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-usp-red" />
                      </div>
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <a href="tel:6122" className="text-gray-700 hover:text-usp-red transition-colors">
                          6122
                        </a>
                        <p className="text-gray-500 text-sm">Call us anytime</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-usp-red-light p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-usp-red" />
                      </div>
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <a
                          href="mailto:contact@uspparking.com"
                          className="text-gray-700 hover:text-usp-red transition-colors"
                        >
                          contact@uspparking.com
                        </a>
                        <p className="text-gray-500 text-sm">We'll respond quickly</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-usp-red-light p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-usp-red" />
                      </div>
                      <div>
                        <h3 className="font-bold">Location</h3>
                        <p className="text-gray-700">Addis Ababa, Ethiopia</p>
                        <p className="text-gray-500 text-sm">Headquarters</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-usp-red-light p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-usp-red" />
                      </div>
                      <div>
                        <h3 className="font-bold">Working Hours</h3>
                        <p className="text-gray-700">Mon-Sun 24Hrs</p>
                        <p className="text-gray-500 text-sm">Always available</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
