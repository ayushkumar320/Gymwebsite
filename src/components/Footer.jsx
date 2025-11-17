import { useMemo } from 'react'

// Static data moved outside component
const MENU_LINKS = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Return & Refund policy', href: '#returns' },
  { label: 'Shipping Information', href: '#shipping' },
  { label: 'Warranty', href: '#warranty' }
]

const HELP_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'About us', href: '#about' },
  { label: 'Log in / Sign up', href: '#login' },
  { label: 'Blog', href: '#blog' }
]

const SERVICE_LINKS = [
  { label: 'Cardio', href: '#cardio' },
  { label: 'Zumba', href: '#zumba' },
  { label: 'Weight Training', href: '#weight-training' }
]

const FEATURES = [
  { icon: '🏳️‍🌈', text: 'LGBTQ friendly' },
  { icon: '👨‍🏫', text: 'Good coach' },
  { icon: '🇮🇳', text: 'Bengaluru owned' },
  { icon: '🎁', text: 'Free trial' }
]

const PAYMENT_METHODS = ['Cash', 'UPI', 'Card']

function Footer() {
  // Memoize links to prevent recreation
  const menuLinks = useMemo(() => MENU_LINKS, [])
  const helpLinks = useMemo(() => HELP_LINKS, [])
  const serviceLinks = useMemo(() => SERVICE_LINKS, [])
  const features = useMemo(() => FEATURES, [])
  const paymentMethods = useMemo(() => PAYMENT_METHODS, [])

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <div>
          <h4 className="text-lg font-semibold mb-5">Menu</h4>
          <ul className="list-none">
            {menuLinks.map((link, index) => (
              <li key={index} className="mb-3">
                <a
                  href={link.href}
                  className="text-gray-300 no-underline text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-5">Help</h4>
          <ul className="list-none">
            {helpLinks.map((link, index) => (
              <li key={index} className="mb-3">
                <a
                  href={link.href}
                  className="text-gray-300 no-underline text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-5">Service</h4>
          <ul className="list-none">
            {serviceLinks.map((link, index) => (
              <li key={index} className="mb-3">
                <a
                  href={link.href}
                  className="text-gray-300 no-underline text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-10 py-10 border-t border-gray-800 border-b mb-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2.5 text-sm text-gray-300">
            <span className="text-xl">{feature.icon}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-5">
        <p className="text-gray-300 text-sm">© 2025 - FitBoutique</p>
        <div className="flex gap-5 flex-wrap">
          {paymentMethods.map((method, index) => (
            <span key={index} className="text-gray-300 text-xs">
              {method}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

