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
  Ärmel,
  Kragen,
  Herstellung,
  Taschenart,
  Grammatur,
  Material,
  Ursprungsland,
  _id,
  onSubmit,
  onDeleteClick

}) {

  const [artikelName, setArtikelName] = useState(Artikelname)
  const [hersteller, setHersteller] = useState(Hersteller)
  const [beschreibung, setBeschreibung] = useState(Beschreibung)
  const [materialangaben, setMaterialangaben] = useState(Materialangaben)
  const [geschlecht, setGeschlecht] = useState(Geschlecht)
  const [aermel, setAermel] = useState(Ärmel)
  const [kragen, setKragen] = useState(Kragen)
  const [herstellung, setHerstellung] = useState(Herstellung)
  const [taschenart, setTaschenart] = useState(Taschenart)
  const [grammatur, setGrammatur] = useState(Grammatur)
  const [material, setMaterial] = useState(Material)
  const [id, setId] = useState(_id)
  const [isFormThere, setIsFormThere] = useState(false)
  const [isActive, setIsActive] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const editData = Object.fromEntries(formData)
          editData.Produktart = "T-Shirts"
          editData._id = id
    onSubmit(editData)
    setIsFormThere(false)
    setIsActive(false)
  }
  
  function handleEditClick(event) {
    event.stopPropagation()
    setIsFormThere(true)
    setIsActive(true)
  }

  function handleDeleteClick(event) {
    event.stopPropagation()
    onDeleteClick()
  }
 
  return (
    <ItemStyled>
      <WrapperStyled active={isActive}>
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
          <EditStyled onClick={handleEditClick}/>
        </IconsWrapperStyled>
      </WrapperStyled>
      {isFormThere && <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Artikel Name
          <InputStyled
            name="Artikelname"
            value={artikelName}
            onChange={event => setArtikelName(event.target.value)}
          />
        </LabelStyled>
        <WrapperTwoColumns>
          <LabelStyled>
            Hersteller
            <InputStyled 
              name="Hersteller"
              value={hersteller}
              onChange={event => setHersteller(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Herstellung
            <InputStyled 
              name="Herstellung"
              value={herstellung}
              onChange={event => setHerstellung(event.target.value)}
            />
          </LabelStyled>
        </WrapperTwoColumns>
        <LabelStyled>
          Beschreibung
          <TextAreaStyled
            name="Beschreibung"
            value={beschreibung}
            onChange={event => setBeschreibung(event.target.value)}
            rows="4"
            cols="30"
          />
        </LabelStyled>
        <LabelStyled>
          Materialangaben
          <InputStyled 
            name="Materialangaben"
            value={materialangaben}
            onChange={event => setMaterialangaben(event.target.value)}
          />
        </LabelStyled>
        <WrapperThreeColumns>
          <LabelStyled>
            Geschlecht
            <InputStyled 
              name="Geschlecht"
              value={geschlecht}
              onChange={event => setGeschlecht(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Ärmel
            <InputStyled 
              name="Ärmel"
              value={aermel}
              onChange={event => setAermel(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Kragen
            <InputStyled 
              name="Kragen"
              value={kragen}
              onChange={event => setKragen(event.target.value)}
            />
          </LabelStyled>
        </WrapperThreeColumns>
        <WrapperThreeColumns>
        <LabelStyled>
            Taschenart
            <InputStyled 
              name="Taschenart"
              value={taschenart}
              onChange={event => setTaschenart(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Grammatur
            <InputStyled 
              name="Grammatur"
              value={grammatur}
              onChange={event => setGrammatur(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Material
            <InputStyled 
              name="Material"
              value={material}
              onChange={event => setMaterial(event.target.value)}
            />
          </LabelStyled>
        </WrapperThreeColumns>
        <ButtonStyled>send</ButtonStyled>
      </FormStyled>
      }
    </ItemStyled>
    

  )
}

const ItemStyled = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  margin: 15px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`

const WrapperStyled = styled.section`
  display:${({ active }) => (active ? 'none' : 'inherit')};
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

const WrapperTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`
const WrapperThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
`
const FormStyled = styled.form`
  display: grid;
  gap: 25px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const LabelStyled = styled.label`
  gap: 10px;
`
const InputStyled = styled.input`
  width: 100%;
  font-size: 1rem;
  border: grey solid 1px;
  :focus {
    border: #FF4382 solid 1px;
  }
`
const TextAreaStyled = styled.textarea`
  width: 100%;
  font-size: 1rem;
  border: grey solid 1px;
  :focus {
    border: #FF4382 solid 1px;
  }
`
const ButtonStyled = styled.button`
  text-decoration: none;
  background-color: grey;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
`
