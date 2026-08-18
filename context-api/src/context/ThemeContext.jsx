import React, { createContext, useState } from 'react'

export const ContextData = createContext()

const ThemeContext = ({children}) => {

  const [theme, setTheme] = useState('light')

  return (
    <ContextData.Provider value={{theme, setTheme}}>
      {children}
    </ContextData.Provider>
  )
}

export default ThemeContext