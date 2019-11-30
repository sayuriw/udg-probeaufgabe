import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import Item from './Item'
import { getItems } from './services'

export default function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    filterItems()
  //  getItems().then(setItems)
  }, [])

  console.log('test',items)

  return (
    
    <>
    <HeaderStyled>List of Items</HeaderStyled>
    {console.log('items', items),
    items.map(item => (
      console.log(item),
      <Item key={item._id} {...item}/>
    ))}
    </>
  )

  function filterItems() {
    getItems(items).then(items => {
      const filteredItems = items.filter(item => item.Hersteller === 'Nakedshirt')
      setItems(filteredItems)
    })
  }


}

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-top: 0;
  padding: 20px;
`

