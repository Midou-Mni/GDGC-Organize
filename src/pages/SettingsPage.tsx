import { useState } from 'react'
import { FiUsers, FiUser, FiBell, FiLock } from 'react-icons/fi'
import UserManagement from '../components/settings/UserManagement'
import ProfileSettings from '../components/settings/ProfileSettings'
import NotificationSettings from '../components/settings/NotificationSettings'
import SecuritySettings from '../components/settings/SecuritySettings'

type SettingsTab = 'profile' | 'users' | 'notifications' | 'security'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile')
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'users', label: 'User Management', icon: FiUsers },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'security', label: 'Security', icon: FiLock },
  ]
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-gray-600">Manage your account and application settings</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="card">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(tab.id as SettingsTab)}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="card">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'security' && <SecuritySettings />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage 