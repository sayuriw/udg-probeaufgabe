import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Item({
  Artikelname,
  Hersteller,
  Beschreibung,
  Materialangaben,
  Geschlecht,
  Produktart,
  Ärmel,
  Bein,
  Kragen,
  Herstellung,
  Taschenart,
  Grammatur,
  Material,
  Ursprungsland

}) {
  return (
    <ItemStyled>
      <h2>{Artikelname}</h2>
      <p>{Hersteller}</p>
      <p>{Beschreibung}</p>
      <p>{Materialangaben}</p>
      <p>{Geschlecht}</p>
      <p>{Produktart}</p>
      <p>{Ärmel}</p>
      <p>{Bein}</p>
      <p>{Kragen}</p>
      <p>{Herstellung}</p>
      <p>{Taschenart}</p>
      <p>{Grammatur}</p>
      <p>{Material}</p>
      <p>{Ursprungsland}</p>
    </ItemStyled>
  )
}

const ItemStyled = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
