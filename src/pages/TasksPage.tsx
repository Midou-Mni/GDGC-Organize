import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi'
import TaskTable from '../components/tasks/TaskTable'
import { mockTasks } from '../data/mockData'

type TaskPriority = 'all' | 'high' | 'medium' | 'low'

const TasksPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority>('all')
  
  // Filter tasks based on search term and priority
  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesPriority = priorityFilter === 'all' || task.priority.toLowerCase() === priorityFilter
    
    return matchesSearch && matchesPriority
  })
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="mt-1 text-gray-600">Manage your tasks and assignments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/tasks/new" className="btn btn-primary flex items-center">
            <FiPlus className="mr-2" />
            Create Task
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
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center">
            <FiFilter className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 mr-2">Priority:</span>
            <select
              className="input py-1 px-2 w-auto"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as TaskPriority)}
            >
              <option value="all">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Tasks Table */}
      <TaskTable tasks={filteredTasks} />
    </div>
  )
}

export default TasksPage 