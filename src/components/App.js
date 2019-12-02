import React, { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../provider'
import styled from 'styled-components/macro'
import Item from './Item'
import CreateItem from './CreateItem'
import { getItems } from './services'

export default function App() {

  const [items, setItems] = useContext(ItemsContext)

  useEffect(() => {
    filterItems()
  }, [])

  return (
    
    <PageStyled>
      <HeaderStyled>List of Items</HeaderStyled>
      <CreateItem/>
      {items.map(item => (
        <Item key={item._id} {...item}/>
      ))}
    </PageStyled>
  )

  function filterItems() {
    getItems(items).then(items => {
      const filteredItems = items.filter(item => item.Produktart === 'T-Shirts')
      setItems(filteredItems)
    })
  }


}

const PageStyled = styled.main`
  display: grid;
  grid-template-rows: 70px auto;
  align-content: flex-start;
  overflow: auto;
`

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-top: 0;
  padding: 20px;
`

