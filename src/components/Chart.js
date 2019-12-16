import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { ItemsContext } from '../provider'

export default function Chart() {
  const [items, setItems] = useContext(ItemsContext)

  let countedItems = items.reduce((obj, item) => {
    obj[item.Produktart] = (obj[item.Produktart] || 0) + 1
    return obj
  }, {})

  //getting percentage
  let total = 0
  for (let i in countedItems) {
    total += countedItems[i]
  }

  for (let i in countedItems) {
    countedItems[i] = Math.round((countedItems[i] / total) * 100) + '%'
  }

  return (
    <StyledSection>
      {Object.entries(countedItems).map(
        ([key, value]) => (
          <ChartItem>
            <p>{key}</p>
            <strong>{value}</strong>
            <BoxStyled/>
          </ChartItem>
        )
      )}
    </StyledSection>
  )
}
const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  min-width: min-content;
  margin-bottom: 10px;
  
`
const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`

const BoxStyled = styled.div`

`
