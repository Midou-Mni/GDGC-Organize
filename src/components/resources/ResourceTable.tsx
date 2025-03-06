import { Link } from 'react-router-dom'
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi'
import { Resource } from '../../data/mockData'

interface ResourceTableProps {
  resources: Resource[]
}

const ResourceTable = ({ resources }: ResourceTableProps) => {
  // Get availability badge
  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Available</span>
      case 'in-use':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">In Use</span>
      case 'unavailable':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Unavailable</span>
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{availability}</span>
    }
  }
  
  return (
    <div className="overflow-x-auto">
      {resources.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No resources found</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resource
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Availability
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resources.map((resource) => (
              <tr key={resource.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{resource.name}</div>
                  <div className="text-sm text-gray-500 truncate max-w-xs">{resource.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{resource.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getAvailabilityBadge(resource.availability)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <Link to={`/resources/${resource.id}`} className="text-primary-600 hover:text-primary-900">
                      <FiEye className="h-5 w-5" />
                    </Link>
                    <Link to={`/resources/${resource.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
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

export default ResourceTable 