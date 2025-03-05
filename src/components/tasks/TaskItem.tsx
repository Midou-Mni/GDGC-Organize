import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiCheck, FiCircle } from 'react-icons/fi'
import { Task, getUserById } from '../../data/mockData'
import { format } from 'date-fns'

interface TaskItemProps {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)
  
  // Format the date
  const formattedDate = format(new Date(task.dueDate), 'MMM d, yyyy')
  
  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600'
      case 'Medium':
        return 'text-orange-500'
      case 'Low':
        return 'text-blue-500'
      default:
        return 'text-gray-500'
    }
  }
  
  // Get assignee
  const assignee = getUserById(task.assignee)
  
  const toggleCompletion = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsCompleted(!isCompleted)
  }
  
  return (
    <Link to={`/tasks/${task.id}`} className="block">
      <div className={`border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow ${isCompleted ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="flex items-start">
          <button 
            className="mt-0.5 mr-3 flex-shrink-0" 
            onClick={toggleCompletion}
          >
            {isCompleted ? (
              <FiCheck className="h-5 w-5 text-green-500" />
            ) : (
              <FiCircle className="h-5 w-5 text-gray-300" />
            )}
          </button>
          
          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-start">
              <h3 className={`font-medium text-gray-900 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                {task.name}
              </h3>
              <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
            
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <FiCalendar className="mr-1" />
              <span>{formattedDate}</span>
              {assignee && (
                <span className="ml-3">
                  Assigned to: {assignee.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TaskItem 