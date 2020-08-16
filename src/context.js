import React from 'react'

const UserContext = React.createContext({user_id: null, username: null, name: null});

export {
  UserContext
}