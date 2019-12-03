import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ onClick, filters, selectedFilter }) {
  return (
    <Grid>
      <ButtonStyled
        active={selectedFilter === 'all'}
        onClick={() => onClick('all')}>
        all
      </ButtonStyled>
      {filters.map(filter => (
        <ButtonStyled
          active={selectedFilter === filter}
          onClick={handleFilterClick}
          key={filter}>
          {filter}
        </ButtonStyled>
      ))}
    </Grid>
  )

  function handleFilterClick(event) {
    const filter = event.target.textContent
    onClick(filter)
  }
}

const Grid = styled.section`
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  margin-top: 1px;
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
  width: 100%;
  
`

function select(propName, first, second) {
  return props => (props[propName] ? first : second)
}

const ButtonStyled = styled.button`
  background: ${select('active', '#FF4382', '#635561')};
  color: white;
  border: none;
  scroll-snap-align: start;
  font-size: 0.9em;
`
