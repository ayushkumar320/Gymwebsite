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

const SHOP_LINKS = [
  { label: 'Foldable', href: '#foldable' },
  { label: 'Studio', href: '#studio' },
  { label: 'Shop all', href: '#shop-all' }
]

const FEATURES = [
  { icon: '🚚', text: 'Free shipping' },
  { icon: '👥', text: 'Community' },
  { icon: '🇦🇺', text: 'Australian owned' },
  { icon: '🔒', text: 'Secure payment' }
]

const PAYMENT_METHODS = ['American Express', 'Apple Pay', 'Mastercard', 'Visa']

function Footer() {
  // Memoize links to prevent recreation
  const menuLinks = useMemo(() => MENU_LINKS, [])
  const helpLinks = useMemo(() => HELP_LINKS, [])
  const shopLinks = useMemo(() => SHOP_LINKS, [])
  const features = useMemo(() => FEATURES, [])
  const paymentMethods = useMemo(() => PAYMENT_METHODS, [])

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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
          <h4 className="text-lg font-semibold mb-5">Shop</h4>
          <ul className="list-none">
            {shopLinks.map((link, index) => (
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
          <h4 className="text-lg font-semibold mb-5">Newsletter</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Sign up to our newsletter to receive exclusive offers.
          </p>
          <div className="flex flex-col gap-2.5">
            <input
              type="email"
              placeholder="E-mail"
              className="py-3.5 px-5 border border-gray-700 bg-transparent text-white text-sm outline-none focus:border-gray-500 placeholder:text-gray-500"
            />
            <button className="bg-white text-gray-900 border-none py-3.5 px-8 text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-200">
              Subscribe
            </button>
          </div>
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

