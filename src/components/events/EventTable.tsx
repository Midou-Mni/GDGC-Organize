import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi'
import { Event } from '../../data/mockData'
import { format } from 'date-fns'

interface EventTableProps {
  events: Event[]
}

const EventTable = ({ events }: EventTableProps) => {
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
    <div className="overflow-x-auto">
      {events.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No events found</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{event.name}</div>
                  <div className="text-sm text-gray-500 truncate max-w-xs">{event.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(event.date), 'MMM d, yyyy')}
                  </div>
                  <div className="text-sm text-gray-500">
                    {format(new Date(event.date), 'h:mm a')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.team.length} members
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <Link to={`/events/${event.id}`} className="text-primary-600 hover:text-primary-900">
                      <FiEye className="h-5 w-5" />
                    </Link>
                    <Link to={`/events/${event.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                      <FiEdit2 className="h-5 w-5" />
                    </Link>
                    <button className="text-red-600 hover:text-red-900">
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default EventTable 