"use client";

import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <main className={`${montserrat.className} py-16 px-4 md:px-6 max-w-7xl mx-auto`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Get in touch with our team and we'll respond as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="mt-1">We've received your inquiry and will get back to you shortly.</p>
                <Button 
                  className="mt-4" 
                  variant="outline"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:support@gigcraft.com" className="text-gray-600 hover:text-primary">
                      support@gigcraft.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+1-800-123-4567" className="text-gray-600 hover:text-primary">
                      +1 (800) 123-4567
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday-Friday, 9am-6pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-gray-600">
                      123 Business Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-4">
                Can't find the answer you're looking for? Check our comprehensive FAQ section.
              </p>
              <Button variant="outline" className="w-full">
                Visit FAQ Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 