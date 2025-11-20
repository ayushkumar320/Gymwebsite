import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Dumbbell, 
  MapPin, 
  Gift, 
  CreditCard, 
  Smartphone, 
  Banknote,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react'

// Static data
const MENU_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Return & Refund Policy', href: '#' },
  { label: 'Shipping Information', href: '#' },
  { label: 'Warranty', href: '#' }
]

const HELP_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' }
]

const SERVICE_LINKS = [
  { label: 'Cardio', href: '#' },
  { label: 'Zumba', href: '#' },
  { label: 'Weight Training', href: '#' },
  { label: 'Personal Training', href: '#' }
]

const FEATURES = [
  { icon: Heart, text: 'LGBTQ Friendly' },
  { icon: Dumbbell, text: 'Expert Coaches' },
  { icon: MapPin, text: 'Bengaluru Owned' },
  { icon: Gift, text: 'Free Trial' }
]

const PAYMENT_METHODS = [
  { icon: Banknote, label: 'Cash' },
  { icon: Smartphone, label: 'UPI' },
  { icon: CreditCard, label: 'Card' }
]

function Footer() {
  const menuLinks = useMemo(() => MENU_LINKS, [])
  const helpLinks = useMemo(() => HELP_LINKS, [])
  const serviceLinks = useMemo(() => SERVICE_LINKS, [])
  const features = useMemo(() => FEATURES, [])
  const paymentMethods = useMemo(() => PAYMENT_METHODS, [])

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black tracking-tighter uppercase text-white hover:text-green-500 transition-colors inline-block">
              BFC
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium fitness destination in Bengaluru. Transform your body and mind with expert guidance and world-class equipment.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-green-500 transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Menu</h4>
            <ul className="space-y-4">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Help</h4>
            <ul className="space-y-4">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-white/10 border-b mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-3 text-gray-300 group cursor-default">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors">
                <feature.icon size={20} />
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Bengaluru Fitness Club. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-500" title={method.label}>
                <method.icon size={16} />
                <span className="text-xs uppercase tracking-wider">{method.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
