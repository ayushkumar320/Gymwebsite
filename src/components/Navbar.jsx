import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'

// Throttle function for scroll events - limits execution to once per wait period
function throttle(func, wait) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), wait)
    }
  }
}

// Static menu items - moved outside component to prevent recreation
const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Glutes',
    href: '/#glutes',
    dropdown: [
      { label: 'Hip Thrust Machine', href: '/#hip-thrust' },
      { label: 'Power Bands', href: '/#power-bands' },
      { label: 'Glutes Program', href: '/#glutes-program' }
    ]
  },
  {
    label: 'Reformers',
    href: '/#reformers',
    dropdown: [
      { label: 'Ivory Fold Reformer', href: '/#ivory' },
      { label: 'Onyx Fold Reformer', href: '/#onyx-fold' },
      { label: 'Onyx Reformer', href: '/#onyx' },
      { label: 'Sienna Reformer', href: '/#sienna' }
    ]
  },
  { label: 'Commercial', href: '/#commercial' },
  { label: 'Shop All', href: '/#shop-all' },
  { label: 'Contact Us', href: '/contact' }
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Force HMR update

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Throttle scroll events for better performance
    const throttledHandleScroll = throttle(handleScroll, 10)

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const menuItems = useMemo(() => MENU_ITEMS, [])

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-[70px]">
        <div className="flex items-center gap-8">
          <button
            className={`md:hidden bg-transparent border-none text-2xl cursor-pointer transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            onClick={toggleMenu}
          >
            ☰
          </button>
          <div
            className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            BFC
          </div>
          <ul
            className={`md:flex items-center gap-8 list-none ${isMenuOpen ? 'flex' : 'hidden'
              } md:static absolute top-full left-0 right-0 md:bg-transparent bg-white md:flex-row flex-col md:items-center md:justify-start items-start md:p-0 p-5 md:shadow-none shadow-lg`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className={item.dropdown ? 'relative group' : ''}>
                <Link
                  to={item.href}
                  className={`no-underline text-[15px] font-normal transition-colors ${isScrolled
                      ? 'text-gray-900 hover:text-gray-600'
                      : 'text-white hover:text-gray-200'
                    }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg py-2.5 min-w-[200px] mt-2.5 list-none">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex} className="p-0">
                        <Link
                          to={dropdownItem.href}
                          className="block py-2.5 px-5 text-sm hover:bg-gray-100 text-gray-900"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="#search"
            className={`text-xl no-underline transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            🔍
          </a>
          <a
            href="#cart"
            className={`text-xl no-underline transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            🛒
          </a>
          <a
            href="#login"
            className={`no-underline text-[15px] transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

