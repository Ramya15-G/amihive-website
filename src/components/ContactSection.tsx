import { useState, type FC, type FormEvent, type ChangeEvent } from 'react'
import {
  IconMail,
  IconPhone,
  IconClock,
  IconCheck,
  IconWhatsApp,
  IconMapPin,
} from './Icons'
import { type ContactFormData, type FormErrors } from '../types'
import { SiteImages } from '../assets/images'

const INITIAL_FORM: ContactFormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  service: 'Web & Software Development',
  budget: '$15,000 - $50,000',
  message: '',
}

type ContactSectionProps = {
  prefilledService?: string
}

export const ContactSection: FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    ...INITIAL_FORM,
    service: prefilledService || INITIAL_FORM.service,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)
  const [submitNotice, setSubmitNotice] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, fieldId: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedField(fieldId)
      setTimeout(() => setCopiedField(null), 2200)
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@company.com).'
    }

    if (formData.phone.trim() && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number or leave blank.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your project or inquiry.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project message should be at least 10 characters.'
    }

    setErrors(newErrors)
    setSubmitNotice(null)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitNotice(
        'Your message passed local validation, but it was not sent because no submission service is configured yet.'
      )
    }, 850)
  }

  const handleReset = () => {
    setSubmittedData(null)
    setFormData(INITIAL_FORM)
    setErrors({})
    setSubmitNotice(null)
  }

  return (
    <section id="contact" className="section-padding contact-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header (from Page 37 of PDF) */}
        <div className="section-header text-center">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2 id="contact-heading" className="section-title">
            Smart IT Solutions for{' '}
            <span className="text-orange">Your Next Project</span>
          </h2>
          <p className="section-lead">
            Whether you&apos;re planning your next digital transformation, looking for expert guidance,
            or need reliable technical support, our team is here to help you every step of the way.
            Reach out today and let&apos;s create something extraordinary together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Verified Contact Details & Map Card (Pages 37 & 38) */}
          <div className="contact-info-card">
            <h3 className="contact-info-card__title">Direct Office & Channels</h3>
            <p className="contact-info-card__subtitle">
              Connect with our solutions desk directly or schedule a free architectural consultation.
            </p>

            <div className="contact-methods-list">
              {/* Head Office (from Page 37) */}
              <div className="contact-method-item">
                <div className="contact-method-icon contact-method-icon--blue">
                  <IconMapPin size={22} />
                </div>
                <div className="contact-method-text">
                  <span className="method-label">Head Office</span>
                  <span className="method-value">
                    Marthandam, Kanyakumari Dt, Tamil Nadu, India
                  </span>
                  <span className="method-sub">Global Remote & Hybrid Engineering Hub</span>
                </div>
              </div>

              {/* Email Us (from Page 37) */}
              <div className="contact-method-item">
                <div className="contact-method-icon contact-method-icon--blue">
                  <IconMail size={22} />
                </div>
                <div className="contact-method-text">
                  <div className="method-label-row">
                    <span className="method-label">Email Us</span>
                    <button
                      type="button"
                      className="copy-chip-btn"
                      onClick={() => handleCopy('info@amihive.com', 'email')}
                      title="Copy email to clipboard"
                    >
                      {copiedField === 'email' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <a href="mailto:info@amihive.com" className="method-value">
                    info@amihive.com
                  </a>
                  <a href="mailto:amihive007@gmail.com" className="method-sub">
                    amihive007@gmail.com
                  </a>
                </div>
              </div>

              {/* Call Us / Phone (from Page 38) */}
              <div className="contact-method-item">
                <div className="contact-method-icon contact-method-icon--orange">
                  <IconPhone size={22} />
                </div>
                <div className="contact-method-text">
                  <div className="method-label-row">
                    <span className="method-label">Call Us</span>
                    <button
                      type="button"
                      className="copy-chip-btn"
                      onClick={() => handleCopy('+918300611720', 'phone')}
                      title="Copy phone to clipboard"
                    >
                      {copiedField === 'phone' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <a href="tel:+918300611720" className="method-value">
                    +91 83006 11720
                  </a>
                  <span className="method-sub">Direct Solutions & Discovery Line</span>
                </div>
              </div>

              {/* WhatsApp (from Page 38) */}
              <div className="contact-method-item">
                <div className="contact-method-icon contact-method-icon--green">
                  <IconWhatsApp size={22} />
                </div>
                <div className="contact-method-text">
                  <span className="method-label">WhatsApp Quick Connect</span>
                  <a
                    href="https://wa.me/918300611720?text=Hello%20AmiHive%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-value"
                  >
                    +91 83006 11720
                  </a>
                  <span className="method-sub">Instant chat with lead engineers</span>
                </div>
              </div>

              {/* Free Consultations Badge (from Page 38) */}
              <div className="contact-method-item">
                <div className="contact-method-icon contact-method-icon--blue">
                  <IconClock size={22} />
                </div>
                <div className="contact-method-text">
                  <span className="method-label">Free Consultations</span>
                  <span className="method-value">Get Expert Guidance Anytime</span>
                  <span className="method-sub">Initial scoping & feasibility session included</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual with Global Network Artwork (from Page 38) */}
            <div className="contact-map-preview">
              <div className="map-badge">
                <IconMapPin size={16} />
                <span>Marthandam, Kanyakumari Dt, Tamil Nadu, India</span>
              </div>
              <div className="contact-map-visual">
                <img
                  src={SiteImages.contactGlobalNetwork}
                  alt="AmiHive Global Connected Infrastructure Hub"
                  className="contact-map-img"
                  loading="lazy"
                />
                <div className="contact-map-overlay">
                  <span className="contact-map-tag">
                    <span className="map-live-dot" />
                    <span>HQ: Tamil Nadu, India ➔ Global Delivery Hub</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Send us a message" Glassmorphic Form (Page 39) */}
          <div className="contact-form-container">
            {submittedData ? (
              <div className="form-success-card" role="status" aria-live="polite">
                <div className="form-success-icon" aria-hidden="true">
                  <IconCheck size={36} />
                </div>
                <h3 className="form-success-title">Message Received!</h3>
                <p className="form-success-message">
                  Thank you, <strong>{submittedData.fullName}</strong>. Your project inquiry regarding{' '}
                  <strong>{submittedData.service}</strong> has been logged.
                </p>

                <div className="submission-receipt">
                  <div className="receipt-row">
                    <span className="receipt-label">Work Email:</span>
                    <span className="receipt-val">{submittedData.email}</span>
                  </div>
                  {submittedData.company && (
                    <div className="receipt-row">
                      <span className="receipt-label">Company:</span>
                      <span className="receipt-val">{submittedData.company}</span>
                    </div>
                  )}
                  {submittedData.phone && (
                    <div className="receipt-row">
                      <span className="receipt-label">Phone:</span>
                      <span className="receipt-val">{submittedData.phone}</span>
                    </div>
                  )}
                  {submittedData.subject && (
                    <div className="receipt-row">
                      <span className="receipt-label">Subject:</span>
                      <span className="receipt-val">{submittedData.subject}</span>
                    </div>
                  )}
                  <div className="receipt-row">
                    <span className="receipt-label">Scope:</span>
                    <span className="receipt-val receipt-val--wrap">{submittedData.message}</span>
                  </div>
                </div>

                <div className="backend-disclaimer-box">
                  <strong>Evaluation Note:</strong> Client-side validation successful. In production, this dispatches via email API to <code>info@amihive.com</code>.
                </div>

                <div className="form-success-actions">
                  <a
                    href={`mailto:info@amihive.com?subject=${encodeURIComponent(
                      submittedData.subject || 'Project Inquiry'
                    )}&body=${encodeURIComponent(
                      `Name: ${submittedData.fullName}\nCompany: ${submittedData.company}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nService: ${submittedData.service}\n\nMessage:\n${submittedData.message}`
                    )}`}
                    className="btn btn--primary"
                  >
                    Open in Your Email Client
                  </a>
                  <button type="button" className="btn btn--outline" onClick={handleReset}>
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form contact-form--dark-glass" onSubmit={handleSubmit} noValidate>
                <div className="form-header-bar">
                  <h3 className="form-title">Send us a message</h3>
                  <p className="form-subtitle">We&apos;d love to hear from you. Fill out the form below.</p>

                  <div className="quick-service-selector">
                    <span className="quick-service-label">Select Core Area:</span>
                    <div className="quick-service-pills">
                      {[
                        'Web & Software Development',
                        'AI Automation & Intelligence',
                        'E-commerce Applications',
                        'Cybersecurity & Asset Protection',
                      ].map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          className={`quick-srv-chip ${formData.service === srv ? 'quick-srv-chip--active' : ''}`}
                          onClick={() => setFormData((prev) => ({ ...prev, service: srv }))}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-row form-row--2col">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="contact-fullName" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
                  </div>

                  {/* Company */}
                  <div className="form-group">
                    <label htmlFor="contact-company" className="form-label">
                      Company / Organization <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row form-row--2col">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Web & AI Application Consultation"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Service Needed */}
                <div className="form-group">
                  <label htmlFor="contact-service" className="form-label">
                    Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Web & Software Development">Web & Software Development</option>
                    <option value="AI Automation & Intelligence">AI Automation & Intelligence</option>
                    <option value="E-commerce Applications">E-commerce Applications</option>
                    <option value="Automation & Process Optimization">Automation & Process Optimization</option>
                    <option value="Logo, Branding & Digital Marketing">Logo, Branding & Digital Marketing</option>
                    <option value="Cybersecurity & Asset Protection">Cybersecurity & Asset Protection</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Next-Gen Mobile App Engineering">Next-Gen Mobile App Engineering</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
                    placeholder="Tell us about your project, timeline, or objectives..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="btn btn--orange btn--lg btn--block-mobile"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="btn-loading-state">
                        <span className="spinner-dot" />
                        Validating...
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                  <span className="privacy-microcopy">
                    🔒 Non-Disclosure ready. We respond within 24 hours.
                  </span>
                </div>
                {submitNotice && (
                  <p className="form-submit-notice" role="status" aria-live="polite">
                    {submitNotice}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
