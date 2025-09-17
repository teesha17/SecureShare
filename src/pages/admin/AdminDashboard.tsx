import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Package2, ClipboardList, Users, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const AdminDashboard: React.FC = () => {
  const location = useLocation();
  const { logout, user } = useAuthStore();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <Package2 size={20} /> },
    { name: 'Inventory', path: '/admin/inventory', icon: <Package2 size={20} /> },
    { name: 'Orders', path: '/admin/orders', icon: <ClipboardList size={20} /> },
  ];
  
  return (
    <div className="bg-light min-h-screen pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-primary text-white">
                <h2 className="text-xl font-bold">Admin Dashboard</h2>
                <p className="text-sm opacity-80">Welcome back, {user?.name || 'Admin'}</p>
              </div>
              
              <div className="p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'bg-primary-bg text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/admin/settings"
                    className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Settings size={20} className="mr-3" />
                    Settings
                  </Link>
                  
                  <button
                    onClick={logout}
                    className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100 transition-colors w-full text-left"
                  >
                    <LogOut size={20} className="mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {location.pathname === '/admin' ? (
                <div>
                  <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-primary-bg p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-1">Total Products</h3>
                      <p className="text-3xl font-bold text-primary">24</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-1">Pending Orders</h3>
                      <p className="text-3xl font-bold text-blue-600">6</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-1">Total Sales</h3>
                      <p className="text-3xl font-bold text-green-600">$12,450</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Customer
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                #ORD-001
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                John Smith
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                $1,200
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                #ORD-002
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                Jane Cooper
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                $3,650
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Low Stock Items</h2>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Brand
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                Valve Assembly
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                TetraPak
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  Out of Stock
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                O-Ring Kit
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                FBF Italia
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  Low (5)
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Outlet />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;