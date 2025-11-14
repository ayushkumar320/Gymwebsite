import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#home' },
    {
      label: 'Glutes',
      href: '#glutes',
      dropdown: [
        { label: 'Hip Thrust Machine', href: '#hip-thrust' },
        { label: 'Power Bands', href: '#power-bands' },
        { label: 'Glutes Program', href: '#glutes-program' }
      ]
    },
    {
      label: 'Reformers',
      href: '#reformers',
      dropdown: [
        { label: 'Ivory Fold Reformer', href: '#ivory' },
        { label: 'Onyx Fold Reformer', href: '#onyx-fold' },
        { label: 'Onyx Reformer', href: '#onyx' },
        { label: 'Sienna Reformer', href: '#sienna' }
      ]
    },
    { label: 'Commercial', href: '#commercial' },
    { label: 'Shop All', href: '#shop-all' },
    { label: 'Contact Us', href: '#contact' }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-[70px]">
        <div className="flex items-center gap-8">
          <button
            className="md:hidden bg-transparent border-none text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <div className="text-2xl font-bold tracking-tight text-gray-900">FitBoutique</div>
          <ul
            className={`md:flex items-center gap-8 list-none ${
              isMenuOpen ? 'flex' : 'hidden'
            } md:static absolute top-full left-0 right-0 md:bg-transparent bg-white md:flex-row flex-col md:items-center md:justify-start items-start md:p-0 p-5 md:shadow-none shadow-lg`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className={item.dropdown ? 'relative group' : ''}>
                <a
                  href={item.href}
                  className="text-gray-900 no-underline text-[15px] font-normal hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <ul className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg py-2.5 min-w-[200px] mt-2.5 list-none">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex} className="p-0">
                        <a
                          href={dropdownItem.href}
                          className="block py-2.5 px-5 text-sm hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <a href="#search" className="text-xl no-underline text-gray-900">
            🔍
          </a>
          <a href="#cart" className="text-xl no-underline text-gray-900">
            🛒
          </a>
          <a href="#login" className="text-gray-900 no-underline text-[15px]">
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

