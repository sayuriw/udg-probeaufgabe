import React, { useContext } from 'react'
import { ItemsContext } from '../provider'
import styled from 'styled-components/macro'
import ItemsPage from './ItemsPage'
import CreateItem from './CreateItem'
import { postItem } from './services'

export default function App() {
  const [items, setItems] = useContext(ItemsContext)
  
  return (
    <PageStyled>
      <HeaderStyled>List of Items</HeaderStyled>
      <CreateItem onSubmit={createItem}/>
      <ItemsPage />
    </PageStyled>
  )

  function createItem(itemData) {
    postItem(itemData).then(item => {
      setItems([item, ...items])
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
