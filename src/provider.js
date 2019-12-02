import React, { useState } from 'react'

export const ItemsContext = React.createContext([[], () => {}])

export default function Provider({ children }) {
  
  const [items, setItems] = useState([])
  
  return (
      <ItemsContext.Provider value={[items, setItems]}>
        {children}   
      </ItemsContext.Provider>
  )
}