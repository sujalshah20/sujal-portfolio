import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, ChevronRight, AlertCircle, Info, Sparkles } from "lucide-react";
import { RESUME_DATA } from "../types";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple reactive email validation regex
  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));

    // Reactive single-field validation update
    if (touched[name]) {
      validateSingleField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateSingleField(name, value);
  };

  const validateSingleField = (name: string, value: string) => {
    let errMessage = "";
    if (!value.trim()) {
      errMessage = "This field cannot be left blank";
    } else if (name === "email" && !validateEmail(value)) {
      errMessage = "Please double check the email pattern (e.g. user@gmail.com)";
    } else if (name === "message" && value.length < 10) {
      errMessage = "Your message must contain at least 10 individuals characters";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errMessage ? errMessage : undefined,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Set all fields to touched
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    // Validate all fields
    const formErrors: ValidationErrors = {};
    if (!fields.name.trim()) formErrors.name = "Your professional name is required";
    if (!fields.email.trim()) {
      formErrors.email = "Your contacting email is required";
    } else if (!validateEmail(fields.email)) {
      formErrors.email = "Please input a valid email pattern";
    }
    if (!fields.subject.trim()) formErrors.subject = "Please mention a quick subject header";
    if (!fields.message.trim()) {
      formErrors.message = "Message details are required";
    } else if (fields.message.length < 10) {
      formErrors.message = "Please include a minimum of 10 characters";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Success process mock
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form variables
      setFields({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-gray-900">
      {/* Dynamic Background Radiance */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full text-xs font-mono text-pink-400 font-medium">
            <Send className="w-3.5 h-3.5" />
            <span>Secure Connection Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Initiate a <span className="text-gradient">Professional Inquiry</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
            Reach out regarding potential full-time developer roles, technical reviews, or system integrations. I will get back to you within 24 working hours.
          </p>
        </div>

        {/* Two Column Layout: Details and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Column Left: Visual Contact Metrics Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#0e1424]/60 backdrop-blur-md border border-gray-800/60 rounded-2xl p-6 sm:p-8">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-semibold block">SUJAL CONTACT METRICS</span>
              
              <h3 className="text-xl font-display font-bold text-white tracking-tight">Get in touch directly</h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                If you prefer not to use the automated console, you can query me directly through my verified email or personal physical connections.
              </p>

              {/* Verified details widgets */}
              <div className="space-y-4 pt-4">
                
                {/* Location item */}
                <div className="flex items-center space-x-3.5 bg-gray-950/40 p-3.5 rounded-xl border border-gray-900">
                  <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">CURRENT STATION</span>
                    <span className="text-white text-sm font-medium">{RESUME_DATA.location}</span>
                  </div>
                </div>

                {/* Email item */}
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="flex items-center space-x-3.5 bg-gray-950/40 p-3.5 rounded-xl border border-gray-900 hover:border-blue-500/30 transition-all cursor-pointer group"
                >
                  <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-all">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">VERIFIED EMAIL</span>
                    <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">{RESUME_DATA.email}</span>
                  </div>
                </a>

                {/* Mobile Phone item */}
                <a
                  href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-3.5 bg-gray-950/40 p-3.5 rounded-xl border border-gray-900 hover:border-pink-500/30 transition-all cursor-pointer group"
                >
                  <div className="p-2.5 bg-pink-500/10 border border-pink-500/20 rounded-lg text-pink-400 group-hover:bg-pink-500/20 transition-all">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">PERSONAL ENVELOPE</span>
                    <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">{RESUME_DATA.phone}</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Bottom: Direct Social Handles Link Hub */}
            <div className="pt-6 border-t border-gray-800/50 space-y-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">DECRYPT SOCIAL MATRIX</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={RESUME_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-950 border border-gray-900 hover:border-gray-800 p-3 rounded-xl hover:text-white transition-all text-xs text-gray-400 cursor-pointer"
                >
                  <Github className="w-4.5 h-4.5 text-blue-400" />
                  <span>Sujalshah20</span>
                </a>
                <a
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-950 border border-gray-900 hover:border-gray-800 p-3 rounded-xl hover:text-white transition-all text-xs text-gray-400 cursor-pointer"
                >
                  <Linkedin className="w-4.5 h-4.5 text-purple-400" />
                  <span>sujal-shah</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column Right: Interactive Glass Contact Form */}
          <div className="lg:col-span-7 flex flex-col bg-gray-950/20 backdrop-blur-md rounded-2xl border border-gray-800/60 p-6 sm:p-8 justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form-console"
                  id="contact-form"
                  onSubmit={handleFormSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Your Identity / Name
                    </label>
                    <div className="relative">
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={fields.name}
                        onChange={handleFieldChange}
                        onBlur={handleBlur}
                        className={`w-full bg-[#0e1424]/60 border rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none transition-all ${
                          touched.name && errors.name
                            ? "border-rose-500/80 focus:border-rose-500/85 focus:ring-1 focus:ring-rose-500/20"
                            : touched.name && !errors.name
                            ? "border-emerald-500/60 focus:border-emerald-500/80"
                            : "border-gray-800 focus:border-blue-500/80"
                        }`}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <div className="flex items-center space-x-1 text-xs text-rose-500 font-light pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Verified Contact Email
                    </label>
                    <input
                      id="email-input"
                      name="email"
                      type="email"
                      placeholder="johndoe@personal.com"
                      value={fields.email}
                      onChange={handleFieldChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#0e1424]/60 border rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none transition-all ${
                        touched.email && errors.email
                          ? "border-rose-500/80 focus:border-rose-500/85 focus:ring-1 focus:ring-rose-500/20"
                          : touched.email && !errors.email
                          ? "border-emerald-500/60 focus:border-emerald-500/80"
                          : "border-gray-800 focus:border-blue-500/80"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="flex items-center space-x-1 text-xs text-rose-500 font-light pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject-input" className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Subject Matter
                    </label>
                    <input
                      id="subject-input"
                      name="subject"
                      type="text"
                      placeholder="Employment proposal, consultancy inquiry, etc."
                      value={fields.subject}
                      onChange={handleFieldChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#0e1424]/60 border rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none transition-all ${
                        touched.subject && errors.subject
                          ? "border-rose-500/80 focus:border-rose-500/85 focus:ring-1 focus:ring-rose-500/20"
                          : touched.subject && !errors.subject
                          ? "border-emerald-500/60 focus:border-emerald-500/80"
                          : "border-gray-800 focus:border-blue-500/80"
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <div className="flex items-center space-x-1 text-xs text-rose-500 font-light pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Message details
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      placeholder="Include dates, company names, scope specifications..."
                      value={fields.message}
                      onChange={handleFieldChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#0e1424]/60 border rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none transition-all resize-none ${
                        touched.message && errors.message
                          ? "border-rose-500/80 focus:border-rose-500/85 focus:ring-1 focus:ring-rose-500/20"
                          : touched.message && !errors.message
                          ? "border-emerald-500/60 focus:border-emerald-500/80"
                          : "border-gray-800 focus:border-blue-500/80"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <div className="flex items-center space-x-1 text-xs text-rose-500 font-light pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Console prompt note */}
                  <div className="bg-[#0e1424]/40 border border-gray-900 p-3.5 rounded-xl text-xs text-gray-400 leading-relaxed font-light flex items-start space-x-2">
                    <Info className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Clicking submit will validate entries reactive schemas locally, simulate standard SMTP verification protocols, and prompt a success feedback dashboard.
                    </span>
                  </div>

                  {/* Action submit */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 text-white font-medium text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-500/10"
                  >
                    <span>{isSubmitting ? "Orchestrating SMTP Handshake..." : "Transmit Encoded Inquiries"}</span>
                    {!isSubmitting && <Send className="w-4 h-4 ml-1" />}
                  </button>
                </motion.form>
              ) : (
                /* Success Layout Page */
                <motion.div
                  key="contact-success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/15 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold block">SMTP HANDSHAKE VERIFIED</span>
                    <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">Transmission Accomplished!</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed font-light">
                      Thank you for reaching out. Your secure inquiry packet has been received. Sujal Shah will evaluate details and make immediate connection.
                    </p>
                  </div>

                  {/* Reset button */}
                  <button
                    id="success-reset-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center space-x-1.5 text-xs text-blue-400 font-mono hover:underline cursor-pointer pt-4"
                  >
                    <span>Open Connection console again</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
