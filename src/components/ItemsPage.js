import React, { useState, useEffect, useContext } from 'react'
import { ItemsContext } from '../provider'
import styled from 'styled-components/macro'
import Item from './Item'
import Filter from './Filter'
import { getItems, deleteItem, patchItem } from './services'

export default function ItemsPage() {
  const [items, setItems] = useContext(ItemsContext)
  const [filteredItems, setFilteredItems] = useState(items)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const allFilters = Array.from(
    items.reduce((prev, item) => {
      prev.add(item.Hersteller)
      return prev
    }, new Set())
  )

  useEffect(() => {
    initialItemsFilter()
  }, [])

  useEffect(() => {
    handleSelectFilter(selectedFilter)
  }, [items])

  return (
    <PageStyled>
      <Filter
        filters={allFilters}
        selectedFilter={selectedFilter}
        onClick={handleSelectFilter}
      />
      {filteredItems.map(item => (
        <Item
          key={item._id}
          onDeleteClick={() => handleDeleteClick(item)}
          onSubmit={handleEditClick}
          {...item}
        />
      ))}
    </PageStyled>
  )

  function initialItemsFilter() {
    getItems(items).then(items => {
      const initialItems = items.filter(item => item.Produktart === 'T-Shirts')
      setItems(initialItems)
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
  function handleSelectFilter(filter) {
    setSelectedFilter(filter)
    if (selectedFilter === 'all') {
      setFilteredItems(items)
    } else {
      const newFilteredItems = items.filter(
        item => item.Hersteller === selectedFilter
      )
      setFilteredItems(newFilteredItems)
    }
  }
}

const PageStyled = styled.main`
  display: grid;
  grid-template-rows: 70px auto;
  align-content: flex-start;
  overflow: auto;
`
