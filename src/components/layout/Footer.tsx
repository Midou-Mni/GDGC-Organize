import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} GDGC Organize. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-primary-600">
              Terms of Service
            </Link>
            <a href="mailto:contact@gdgcorganize.com" className="text-sm text-gray-600 hover:text-primary-600">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 