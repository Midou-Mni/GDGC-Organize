import { Link } from "react-router-dom";
import { FiCalendar, FiCheckSquare, FiBell } from "react-icons/fi";
import EventCard from "../components/events/EventCard";
import TaskItem from "../components/tasks/TaskItem";
import UpdateItem from "../components/updates/UpdateItem";
import { mockEvents, mockTasks, mockUpdates } from "../data/mockData";
import Stats from "../components/Stats";

const HomePage = () => {
  // Get only upcoming events (3 max)
  const upcomingEvents = mockEvents
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  // Get today's tasks
  const todayTasks = mockTasks
    .filter((task) => {
      const today = new Date();
      const dueDate = new Date(task.dueDate);
      return (
        dueDate.getDate() === today.getDate() &&
        dueDate.getMonth() === today.getMonth() &&
        dueDate.getFullYear() === today.getFullYear()
      );
    })
    .slice(0, 5);

  // Get recent updates (5 max)
  const recentUpdates = mockUpdates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <section>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to GDGC Organize
          </h1>
          <p className="mt-2 text-gray-600">
            Your comprehensive event management dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Events */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FiCalendar className="text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold">Upcoming Events</h2>
              </div>
              <Link
                to="/events"
                className="text-sm text-primary-600 hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No upcoming events
                </p>
              )}
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FiCheckSquare className="text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold">Today's Tasks</h2>
              </div>
              <Link
                to="/tasks"
                className="text-sm text-primary-600 hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="space-y-2">
              {todayTasks.length > 0 ? (
                todayTasks.map((task) => <TaskItem key={task.id} task={task} />)
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No tasks for today
                </p>
              )}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FiBell className="text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold">Recent Updates</h2>
              </div>
            </div>

            <div className="space-y-3">
              {recentUpdates.length > 0 ? (
                recentUpdates.map((update) => (
                  <UpdateItem key={update.id} update={update} />
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No recent updates
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/events/new" className="btn btn-primary text-center">
            Create Event
          </Link>
          <Link to="/tasks/new" className="btn btn-secondary text-center">
            Add Task
          </Link>
          <Link to="/resources/new" className="btn btn-outline text-center">
            Add Resource
          </Link>
          <Link to="/settings" className="btn btn-outline text-center">
            Settings
          </Link>
        </div>
      </section>

      <div className="flex justify-center">
        <Stats />
      </div>
    </div>
  );
};

export default HomePage;
