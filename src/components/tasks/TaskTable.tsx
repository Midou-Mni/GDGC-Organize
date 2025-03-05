import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit2, FiTrash2, FiEye, FiCheck, FiCircle } from 'react-icons/fi'
import { Task, getUserById } from '../../data/mockData'
import { format } from 'date-fns'

interface TaskTableProps {
  tasks: Task[]
}

const TaskTable = ({ tasks }: TaskTableProps) => {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(
    tasks.reduce((acc, task) => ({ ...acc, [task.id]: task.completed }), {})
  )
  
  // Get priority color and badge
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">High</span>
      case 'Medium':
        return <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">Medium</span>
      case 'Low':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Low</span>
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{priority}</span>
    }
  }
  
  const toggleTaskCompletion = (taskId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }))
  }
  
  return (
    <div className="overflow-x-auto">
      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No tasks found</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => {
              const assignee = getUserById(task.assignee)
              const isCompleted = completedTasks[task.id]
              
              return (
                <tr key={task.id} className={`hover:bg-gray-50 ${isCompleted ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button 
                        className="mr-3 flex-shrink-0" 
                        onClick={(e) => toggleTaskCompletion(task.id, e)}
                      >
                        {isCompleted ? (
                          <FiCheck className="h-5 w-5 text-green-500" />
                        ) : (
                          <FiCircle className="h-5 w-5 text-gray-300" />
                        )}
                      </button>
                      <div>
                        <div className={`text-sm font-medium ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {task.name}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{task.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {format(new Date(task.dueDate), 'MMM d, yyyy')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignee ? (
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <img className="h-8 w-8 rounded-full" src={assignee.avatar} alt={assignee.name} />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{assignee.name}</div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">Unassigned</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getPriorityBadge(task.priority)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link to={`/tasks/${task.id}`} className="text-primary-600 hover:text-primary-900">
                        <FiEye className="h-5 w-5" />
                      </Link>
                      <Link to={`/tasks/${task.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        <FiEdit2 className="h-5 w-5" />
                      </Link>
                      <button className="text-red-600 hover:text-red-900">
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TaskTable 