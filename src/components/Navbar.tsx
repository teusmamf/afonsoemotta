import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import ContactBtn from './contactbtn'
import logonav from '../../assets/Logo- AeM- final_AeM-Logo-Principal-050D66.png'
import '../index.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'services', label: 'Serviços' },
  ]

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollLink to="home" smooth={true} duration={500} offset={-64} className="cursor-pointer">
              <img src={logonav} alt="logonav" className="logo_navbar" />
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.path}
                to={link.path}
                smooth={true}
                duration={500}
                offset={-64}
                spy={true}
                activeClass="text-primary border-b-2 border-primary"
                className="cursor-pointer text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </ScrollLink>
            ))}
            <ContactBtn />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 mt-16">
            <div className="pt-2 pb-3 space-y-1 px-4 bg-white">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.path}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  spy={true}
                  activeClass="text-primary bg-primary/10"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="px-3 py-2">
                <ContactBtn />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
