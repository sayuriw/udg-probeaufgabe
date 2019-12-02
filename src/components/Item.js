import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { DeleteForever } from 'styled-icons/material/DeleteForever'
import { Edit } from 'styled-icons/boxicons-solid/Edit'

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
  Ursprungsland,
  onEditClick,
  onDeleteClick

}) {

  function handleEditClick(event) {
    event.stopPropagation()
    onEditClick()
  }

  function handleDeleteClick(event) {
    event.stopPropagation()
    onDeleteClick()
  }

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
      <IconsWrapperStyled>
        <DeleteStyled onClick={handleDeleteClick}/>
        <EditStyled
          // to={{
          //   pathname: '/edit',
          //   editItemData: {
          //     Artikelname,
          //     Hersteller,
          //     Beschreibung,
          //     Materialangaben,
          //     Geschlecht,
          //     Ärmel,
          //     Kragen,
          //     Herstellung,
          //     Taschenart,
          //     Grammatur,
          //     Material,
          //     Ursprungsland
          //   }
          // }}
          onClick={handleEditClick}
        />
      </IconsWrapperStyled>
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
const IconsWrapperStyled = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
`
const EditStyled = styled(Edit)`
  height: 45px;
  width: 45px;
  padding: 5px;
`
const DeleteStyled = styled(DeleteForever)`
  height: 45px;
  width: 45px;
  padding: 5px;

`
