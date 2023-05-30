import React from 'react'
import LoginMessage from '../Components/LoginMessage'
import FilesPage from './FilesPage'
import { useAuth } from '../Context/AuthProvider'
const HomePage = () => {
  const {user}=useAuth();
  return user ? <FilesPage/> : <LoginMessage/>
}

export default HomePage