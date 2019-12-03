import React, { useEffect, useContext } from 'react'
import { ItemsContext } from '../provider'
import styled from 'styled-components/macro'
import Item from './Item'
import CreateItem from './CreateItem'
import { getItems, postItem, deleteItem, patchItem } from './services'

export default function App() {
  const [items, setItems] = useContext(ItemsContext)

  useEffect(() => {
    filterItems()
  }, [])

  return (
    <PageStyled>
      <HeaderStyled>List of Items</HeaderStyled>
      <CreateItem onSubmit={createItem}/>
      {items.map(item => (
        <Item
          key={item._id}
          onDeleteClick={() => handleDeleteClick(item)}
          onSubmit={handleEditClick}
          {...item}
        />
      ))}
    </PageStyled>
  )

  function filterItems() {
    getItems(items).then(items => {
      const filteredItems = items.filter(
        item => item.Hersteller === 'Nakedshirt'
      )
      setItems(filteredItems)
    })
  }
  function createItem(itemData) {
    postItem(itemData).then(item => {
      setItems([item, ...items])
    })
  }
   function handleEditClick(editData) {
     const id = editData._id
     patchItem(id, editData).then(editItem => {
     const index = items.findIndex(item => item._id === id)
       setItems([...items.slice(0, index), editItem, ...items.slice(index + 1)])
     })
   }
  function handleDeleteClick(item) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      deleteItem(item._id).then(deletedItem => {
        const index = items.findIndex(item => item._id === deletedItem._id)
        setItems([...items.slice(0, index), ...items.slice(index + 1)])
      })
    }
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
