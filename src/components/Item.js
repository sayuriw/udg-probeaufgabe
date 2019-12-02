import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { DeleteForever } from 'styled-icons/material/DeleteForever'

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
      {Artikelname && (<h2>{Artikelname}</h2>)}
      {Hersteller && (<p><b>Hersteller: </b>{Hersteller}</p>)}
      {Beschreibung && (<p><b>Beschreibung: </b>{Beschreibung}</p>)}
      {Materialangaben && (<p><b>Materialangaben: </b>{Materialangaben}</p>)}
      {Geschlecht && (<p><b>Geschlecht: </b>{Geschlecht}</p>)}
      {Ärmel && (<p><b>Ärmel: </b>{Ärmel}</p>)}
      {Kragen && (<p><b>Kragen: </b>{Kragen}</p>)}
      {Herstellung && (<p><b>Herstellung: </b>{Herstellung}</p>)}
      {Taschenart && (<p><b>Taschenart: </b>{Taschenart}</p>)}
      {Grammatur && (<p><b>Grammatur: </b>{Grammatur}</p>)}
      {Material && (<p><b>Material: </b>{Material}</p>)}
      {Ursprungsland && (<p><b>Ursprungsland: </b>{Ursprungsland}</p>)}
      <DeleteStyled></DeleteStyled>
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
const DeleteStyled = styled(DeleteForever)`
position: absolute;
height: 45px;
width: 45px;
padding: 5px;
right: 20px;
bottom: 15px;
`
