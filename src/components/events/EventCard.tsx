import React from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiUsers } from 'react-icons/fi'
import { Event, getUserById } from '../../data/mockData'
import { format } from 'date-fns'

interface EventCardProps {
  event: Event
}

const EventCard = ({ event }: EventCardProps) => {
  // Format the date
  const formattedDate = format(new Date(event.date), 'MMM d, yyyy - h:mm a')
  
  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800'
      case 'Ongoing':
        return 'bg-green-100 text-green-800'
      case 'Completed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  return (
    <Link to={`/events/${event.id}`} className="block">
      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-gray-900">{event.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
            {event.status}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{event.description}</p>
        
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <FiCalendar className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <FiUsers className="mr-1" />
          <span>{event.team.length} team members</span>
        </div>
      </div>
    </Link>
  )
}

export default EventCard 