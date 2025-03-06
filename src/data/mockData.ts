// Types
export interface Event {
  id: string
  name: string
  description: string
  date: string
  status: 'Planning' | 'Ongoing' | 'Completed'
  team: string[]
}

export interface Task {
  id: string
  name: string
  description: string
  dueDate: string
  assignee: string
  priority: 'High' | 'Medium' | 'Low'
  completed: boolean
  eventId?: string
}

export interface Resource {
  id: string
  name: string
  description: string
  quantity: number
  availability: 'available' | 'in-use' | 'unavailable'
}

export interface Update {
  id: string
  title: string
  description: string
  date: string
  type: 'event' | 'task' | 'resource' | 'system'
  relatedId?: string
}

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'member'
  avatar: string
}

// Mock Data
export const mockEvents: Event[] = [
  {
    id: 'event-1',
    name: 'Annual Conference',
    description: 'Our annual tech conference with industry speakers and networking',
    date: '2023-12-15T09:00:00Z',
    status: 'Planning',
    team: ['user-1', 'user-2', 'user-3']
  },
  {
    id: 'event-2',
    name: 'Team Building Workshop',
    description: 'A day of team building activities and exercises',
    date: '2023-11-20T13:00:00Z',
    status: 'Completed',
    team: ['user-2', 'user-4']
  },
  {
    id: 'event-3',
    name: 'Product Launch',
    description: 'Launch event for our new product line',
    date: '2024-01-10T18:00:00Z',
    status: 'Planning',
    team: ['user-1', 'user-3', 'user-5']
  },
  {
    id: 'event-4',
    name: 'Quarterly Planning',
    description: 'Strategic planning session for Q1 2024',
    date: '2023-12-05T10:00:00Z',
    status: 'Planning',
    team: ['user-1', 'user-2']
  },
  {
    id: 'event-5',
    name: 'Hackathon',
    description: '48-hour coding challenge for developers',
    date: '2024-02-15T09:00:00Z',
    status: 'Planning',
    team: ['user-3', 'user-4', 'user-5']
  }
]

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    name: 'Book conference venue',
    description: 'Find and book a suitable venue for the annual conference',
    dueDate: '2023-11-15T17:00:00Z',
    assignee: 'user-1',
    priority: 'High',
    completed: false,
    eventId: 'event-1'
  },
  {
    id: 'task-2',
    name: 'Send invitations',
    description: 'Send out invitations to all participants',
    dueDate: '2023-11-20T17:00:00Z',
    assignee: 'user-2',
    priority: 'Medium',
    completed: true,
    eventId: 'event-1'
  },
  {
    id: 'task-3',
    name: 'Prepare presentation',
    description: 'Create slides for the product launch presentation',
    dueDate: '2023-12-20T17:00:00Z',
    assignee: 'user-3',
    priority: 'High',
    completed: false,
    eventId: 'event-3'
  },
  {
    id: 'task-4',
    name: 'Order catering',
    description: 'Arrange food and drinks for the event',
    dueDate: '2023-12-01T17:00:00Z',
    assignee: 'user-4',
    priority: 'Medium',
    completed: false,
    eventId: 'event-1'
  },
  {
    id: 'task-5',
    name: 'Set up registration system',
    description: 'Configure online registration for the hackathon',
    dueDate: '2024-01-15T17:00:00Z',
    assignee: 'user-5',
    priority: 'Low',
    completed: false,
    eventId: 'event-5'
  },
  {
    id: 'task-6',
    name: 'Prepare quarterly report',
    description: 'Compile data and create the quarterly performance report',
    dueDate: '2023-11-30T17:00:00Z',
    assignee: 'user-1',
    priority: 'High',
    completed: false
  }
]

export const mockResources: Resource[] = [
  {
    id: 'resource-1',
    name: 'Projector',
    description: 'HD Projector for presentations',
    quantity: 2,
    availability: 'available'
  },
  {
    id: 'resource-2',
    name: 'Conference Room A',
    description: 'Large conference room with seating for 50 people',
    quantity: 1,
    availability: 'in-use'
  },
  {
    id: 'resource-3',
    name: 'Laptops',
    description: 'Dell XPS 13 laptops for presenters',
    quantity: 5,
    availability: 'available'
  },
  {
    id: 'resource-4',
    name: 'Wireless Microphones',
    description: 'Wireless handheld microphones',
    quantity: 4,
    availability: 'available'
  },
  {
    id: 'resource-5',
    name: 'Catering Service',
    description: 'External catering service for events',
    quantity: 1,
    availability: 'unavailable'
  }
]

export const mockUpdates: Update[] = [
  {
    id: 'update-1',
    title: 'New event created',
    description: 'Annual Conference has been added to the calendar',
    date: '2023-11-01T10:23:00Z',
    type: 'event',
    relatedId: 'event-1'
  },
  {
    id: 'update-2',
    title: 'Task completed',
    description: 'Send invitations task has been marked as completed',
    date: '2023-11-10T14:15:00Z',
    type: 'task',
    relatedId: 'task-2'
  },
  {
    id: 'update-3',
    title: 'Resource status changed',
    description: 'Conference Room A is now in use',
    date: '2023-11-08T09:30:00Z',
    type: 'resource',
    relatedId: 'resource-2'
  },
  {
    id: 'update-4',
    title: 'New team member added',
    description: 'Sarah Johnson has joined the team',
    date: '2023-11-05T11:45:00Z',
    type: 'system'
  },
  {
    id: 'update-5',
    title: 'Event rescheduled',
    description: 'Team Building Workshop has been moved to November 20',
    date: '2023-11-02T16:20:00Z',
    type: 'event',
    relatedId: 'event-2'
  }
]

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 'user-2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'manager',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 'user-3',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    role: 'member',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 'user-4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'member',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 'user-5',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    role: 'manager',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
]

// Helper function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id)
}

// Helper function to get event by ID
export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id)
} 