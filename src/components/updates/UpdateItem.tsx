import { FiCalendar, FiInfo, FiCheckSquare, FiPackage, FiSettings } from 'react-icons/fi'
import { Update } from '../../data/mockData'
import { format, formatDistanceToNow } from 'date-fns'

interface UpdateItemProps {
  update: Update
}

const UpdateItem = ({ update }: UpdateItemProps) => {
  // Format the date
  const formattedDate = format(new Date(update.date), 'MMM d, yyyy')
  const timeAgo = formatDistanceToNow(new Date(update.date), { addSuffix: true })
  
  // Get icon based on update type
  const getIcon = (type: string) => {
    switch (type) {
      case 'event':
        return <FiCalendar className="h-5 w-5 text-primary-500" />
      case 'task':
        return <FiCheckSquare className="h-5 w-5 text-green-500" />
      case 'resource':
        return <FiPackage className="h-5 w-5 text-orange-500" />
      case 'system':
        return <FiSettings className="h-5 w-5 text-gray-500" />
      default:
        return <FiInfo className="h-5 w-5 text-gray-500" />
    }
  }
  
  return (
    <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md transition-colors">
      <div className="flex-shrink-0 mt-1">
        {getIcon(update.type)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          {update.title}
        </p>
        <p className="text-sm text-gray-500">
          {update.description}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {timeAgo}
        </p>
      </div>
    </div>
  )
}

export default UpdateItem 