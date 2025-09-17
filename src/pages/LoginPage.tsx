import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login, adminLogin, userLogin } = useAuthStore();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Demo logins for testing
  const handleDemoAdminLogin = () => {
    adminLogin();
    navigate('/admin');
  };
  
  const handleDemoUserLogin = () => {
    userLogin();
    navigate('/');
  };
  
  return (
    <div className="bg-light min-h-screen py-16 flex items-center">
      <div className="container-custom max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600">
              Sign in to access your account
            </p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <button
              type="submit"
              className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:text-primary-dark font-medium">
                Register
              </Link>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">
              For demo purposes:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleDemoAdminLogin}
                className="btn bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-800 text-sm"
              >
                Admin Login
              </button>
              <button
                onClick={handleDemoUserLogin}
                className="btn bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-600 text-sm"
              >
                User Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;