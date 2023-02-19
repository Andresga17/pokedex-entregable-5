import { useSelector } from 'react-redux';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const { nameTrainer } = useSelector(state => state)

  if(nameTrainer) {
    return <Outlet/>
  }else {
    return <Navigate to='/' />
  }

  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes