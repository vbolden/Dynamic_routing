import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import Admin from './pages/Admin'


function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <div>
        <Routes>
          <Route 
          path="/"
          element={<Navigate to="/blog" />}
          />
          
          <Route 
          path="/blog"
          element={<BlogIndex />}
          />
          <Route 
          path="/blog/:slug"
          element={<BlogPost />}
          />
          <Route 
          path="/login"
          element={<Login />}
          />
          <Route 
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
