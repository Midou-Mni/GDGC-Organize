import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage 