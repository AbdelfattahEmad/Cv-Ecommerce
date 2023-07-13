import React from 'react'
import { useSelector } from 'react-redux'

export const withAuth = (Component) => {
  return (props) => {
    const { isLogged } = useSelector((state) => state.auth);
    return isLogged ? <Component {...props}/> : <p> must Be Authenticated </p>
  }
}
