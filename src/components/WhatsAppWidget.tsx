import { useState, type FC } from 'react'
import { IconWhatsApp, IconClose } from './Icons'

export const WhatsAppWidget: FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  const defaultMessage = 'Hello AmiHive Team, I would like to inquire about your software engineering services.'
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="whatsapp-widget-container">
      {/* Popover Card */}
      {popoverOpen && (
        <div className="whatsapp-popover" role="dialog" aria-labelledby="wa-title">
          <div className="whatsapp-popover__header">
            <div className="whatsapp-popover__brand">
              <span className="wa-online-indicator" />
              <div>
                <h4 id="wa-title" className="wa-brand-name">AmiHive Solutions Desk</h4>
                <span className="wa-status-text">Typically replies in 15 mins</span>
              </div>
            </div>
            <button
              type="button"
              className="wa-close-btn"
              onClick={() => setPopoverOpen(false)}
              aria-label="Close WhatsApp chat popup"
            >
              <IconClose size={16} />
            </button>
          </div>

          <div className="whatsapp-popover__body">
            <div className="wa-chat-bubble">
              <p>Hi there! 👋 Welcome to AmiHive Software Solutions.</p>
              <p>How can our engineering team assist your project today?</p>
              <span className="wa-bubble-time">Just now</span>
            </div>
          </div>

          <div className="whatsapp-popover__footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa-start"
            >
              <IconWhatsApp size={18} />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        className="whatsapp-floating-btn"
        onClick={() => setPopoverOpen(!popoverOpen)}
        aria-label="Chat on WhatsApp with AmiHive"
        aria-expanded={popoverOpen}
      >
        <IconWhatsApp size={28} />
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
      </button>
    </div>
  )
}
