import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import TasksPage from './pages/TasksPage'
import ResourcesPage from './pages/ResourcesPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'
import NewEvent from './components/events/NewEvent'
import NewTask from './components/tasks/NewTask'
import NewResource from './components/resources/NewResource'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="events/new" element={<NewEvent />} />
        <Route path="tasks/new" element={<NewTask />} />
        <Route path="resources/new" element={<NewResource />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App 