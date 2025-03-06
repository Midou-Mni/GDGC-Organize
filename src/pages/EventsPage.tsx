import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi'
import EventTable from '../components/events/EventTable'
import { mockEvents } from '../data/mockData'

type EventStatus = 'all' | 'planning' | 'ongoing' | 'completed'

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<EventStatus>('all')
  
  // Filter events based on search term and status
  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || event.status.toLowerCase() === statusFilter
    
    return matchesSearch && matchesStatus
  })
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="mt-1 text-gray-600">Manage your events and schedules</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/events/new" className="btn btn-primary flex items-center">
            <FiPlus className="mr-2" />
            Create Event
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
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center">
            <FiFilter className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 mr-2">Status:</span>
            <select
              className="input py-1 px-2 w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as EventStatus)}
            >
              <option value="all">All</option>
              <option value="planning">Planning</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Events Table */}
      <EventTable events={filteredEvents} />
    </div>
  )
}

export default EventsPage 