import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateItem({ onSubmit }) {
  const [isFormThere, setIsFormThere] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.Produktart = 'T-Shirts'
    onSubmit(data)
    setIsFormThere(false)
  }

  return (
    <>
      <ButtonNewItemStyled onClick={() => setIsFormThere(true)}>
        Neues Item
      </ButtonNewItemStyled>
      {isFormThere && (
        <FormStyled onSubmit={handleSubmit}>
          <LabelStyled>
            Artikel Name
            <InputStyled name="Artikelname" />
          </LabelStyled>
          <WrapperTwoColumns>
            <LabelStyled>
              Hersteller
              <InputStyled name="Hersteller" />
            </LabelStyled>
            <LabelStyled>
              Herstellung
              <InputStyled name="Herstellung" />
            </LabelStyled>
          </WrapperTwoColumns>
          <LabelStyled>
            Beschreibung
            <TextAreaStyled name="Beschreibung" rows="4" cols="30" />
          </LabelStyled>
          <LabelStyled>
            Materialangaben
            <InputStyled name="Materialangaben" />
          </LabelStyled>
          <WrapperThreeColumns>
            <LabelStyled>
              Geschlecht
              <InputStyled name="Geschlecht" />
            </LabelStyled>
            <LabelStyled>
              Ärmel
              <InputStyled name="Ärmel" />
            </LabelStyled>
            <LabelStyled>
              Kragen
              <InputStyled name="Kragen" />
            </LabelStyled>
          </WrapperThreeColumns>
          <WrapperTwoColumns>
            <LabelStyled>
              Grammatur
              <InputStyled name="Grammatur" />
            </LabelStyled>
            <LabelStyled>
              Material
              <InputStyled name="Material" />
            </LabelStyled>
          </WrapperTwoColumns>
          <ButtonStyled>send</ButtonStyled>
        </FormStyled>
      )}
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
