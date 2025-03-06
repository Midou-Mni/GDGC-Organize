import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi'
import ResourceTable from '../components/resources/ResourceTable'
import { mockResources } from '../data/mockData'

type ResourceAvailability = 'all' | 'available' | 'in-use' | 'unavailable'

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [availabilityFilter, setAvailabilityFilter] = useState<ResourceAvailability>('all')
  
  // Filter resources based on search term and availability
  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesAvailability = availabilityFilter === 'all' || resource.availability === availabilityFilter
    
    return matchesSearch && matchesAvailability
  })
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
          <p className="mt-1 text-gray-600">Manage your equipment and resources</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/resources/new" className="btn btn-primary flex items-center">
            <FiPlus className="mr-2" />
            Add Resource
          </Link>
        </div>
      </div>
      
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center">
            <FiFilter className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 mr-2">Availability:</span>
            <select
              className="input py-1 px-2 w-auto"
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value as ResourceAvailability)}
            >
              <option value="all">All</option>
              <option value="available">Available</option>
              <option value="in-use">In Use</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Resources Table */}
      <ResourceTable resources={filteredResources} />
    </div>
  )
}

export default ResourcesPage 