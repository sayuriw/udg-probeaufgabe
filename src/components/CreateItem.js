import React, { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../provider'
import styled from 'styled-components/macro'


export default function CreateItem({onSubmit}) {

  //const [items, setItems] = useContext(ItemsContext)

  // const [artikelName, setArtikelName] = useState(editItemData.Artikelname || '')
  // const [hersteller, setHersteller] = useState(editItemData.hersteller || '')
  // const [beschreibung, setBeschreibung] = useState(editItemData.beschreibung || '')
  // const [materialangaben, setMaterialangaben] = useState(editItemData.materialangaben || '')
  // const [geschlecht, setGeschlecht] = useState(editItemData.geschlecht || '')
  // const [aermel, setAermel] = useState(editItemData.aermel || '')
  // const [kragen, setKragen] = useState(editItemData.kragen || '')
  // const [herstellung, setHerstellung] = useState(editItemData.herstellung || '')
  // const [grammatur, setGrammatur] = useState(editItemData.grammatur || '')
  // const [material, setMaterial] = useState(editItemData.material || '')
  const [isFormThere, setIsFormThere] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
          data.Produktart = "T-Shirts"
     onSubmit(data)
    setIsFormThere(false)

  }
  
  return (
    <>
      <ButtonNewItemStyled onClick={() => setIsFormThere(true)}>Neues Item</ButtonNewItemStyled>
      {isFormThere && <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Artikel Name
          <InputStyled
            name="Artikelname"
            // value={artikelName}
            // onChange={event => setArtikelName(event.target.value)}
          />
        </LabelStyled>
        <WrapperTwoColumns>
          <LabelStyled>
            Hersteller
            <InputStyled 
              name="Hersteller"
              // value={hersteller}
              // onChange={event => setHersteller(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Herstellung
            <InputStyled 
              name="Herstellung"
              // value={herstellung}
              // onChange={event => setHerstellung(event.target.value)}
            />
          </LabelStyled>
        </WrapperTwoColumns>
        <LabelStyled>
          Beschreibung
          <TextAreaStyled
            name="Beschreibung"
            // value={beschreibung}
            // onChange={event => setBeschreibung(event.target.value)}
            rows="4"
            cols="30"
          />
        </LabelStyled>
        <LabelStyled>
          Materialangaben
          <InputStyled 
            name="Materialangaben"
            // value={materialangaben}
            // onChange={event => setMaterialangaben(event.target.value)}
          />
        </LabelStyled>
        <WrapperThreeColumns>
          <LabelStyled>
            Geschlecht
            <InputStyled 
              name="Geschlecht"
              // value={geschlecht}
              // onChange={event => setGeschlecht(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Ärmel
            <InputStyled 
              name="Ärmel"
              // value={aermel}
              // onChange={event => setAermel(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Kragen
            <InputStyled 
              name="Kragen"
              // value={kragen}
              // onChange={event => setKragen(event.target.value)}
            />
          </LabelStyled>
        </WrapperThreeColumns>
        <WrapperTwoColumns>
          <LabelStyled>
            Grammatur
            <InputStyled 
              name="Grammatur"
              // value={grammatur}
              // onChange={event => setGrammatur(event.target.value)}
            />
          </LabelStyled>
          <LabelStyled>
            Material
            <InputStyled 
              name="Material"
              // value={material}
              // onChange={event => setMaterial(event.target.value)}
            />
          </LabelStyled>
        </WrapperTwoColumns>
        <ButtonStyled>send</ButtonStyled>
      </FormStyled>
      }
    </>
  )

}

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
    border: blue solid 1px;
  }
`
const TextAreaStyled = styled.textarea`
  width: 100%;
  font-size: 1rem;
  border: grey solid 1px;
  :focus {
    border: blue solid 1px;
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
const ButtonNewItemStyled = styled.button`
  
  text-decoration: none;
  background-color: grey;
  margin: 0 25px;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
`