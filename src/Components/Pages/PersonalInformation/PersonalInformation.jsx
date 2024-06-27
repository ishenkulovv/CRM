import React, { useState } from 'react'
import { BlockContainer } from '../../../Base/styled'
import { Form, FormField, FormLabel, FormSubmit, HR, Row, Title, UploaderActions, UploaderAdd, UploaderBlock, UploaderDelete, UploaderImage, UploaderInput, UploaderText } from './styled'
import Input from '../../Atoms/Input/Input'
import Select from '../../Atoms/Select/Select'
import Button from '../../Atoms/Button/Button'
import { REGIONS } from './const';
import { useSelector } from 'react-redux'

export default function PersonalInformation() {
  const [image, setImage] = useState(null)
  const [currentRegion, setCurrentRegion] = useState(null)
  const [currentCity, setCurrentCity] = useState(null)

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(event);
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleImageRemove = () => setImage(null)

  const handleRegion = (option) => setCurrentRegion(option)

  const handleCity = (option) => setCurrentCity(option);

  return (
    <BlockContainer padding="24px 32px">
      <Title>Personal Information</Title>
      <HR />
      <UploaderBlock>
        <FormLabel htmlFor="upload-photo">
          <UploaderImage src={image} />
        </FormLabel>
        <UploaderInput onChange={handleImage} id="upload-photo" type="file" />
        <UploaderBlock direction="column">
          <UploaderText>We only support .JPG, .JPEG, or .PNG file.</UploaderText>
          <UploaderActions>
            <UploaderAdd htmlFor="upload-photo">Upload your photo</UploaderAdd>
            <UploaderDelete>
              <Button handler={handleImageRemove} type="transparent-dark">Delete</Button>
            </UploaderDelete>
          </UploaderActions>
        </UploaderBlock>
      </UploaderBlock>
      <Form>
      <Row>
          <FormField>
            <FormLabel htmlFor='first_name'>First name</FormLabel>
            <Input id="first_name" />
          </FormField>
          <FormField>
            <FormLabel>Last name</FormLabel>
            <Input />
          </FormField>
        </Row>
        <Row>
          <FormField>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id="email" />
          </FormField>
          <FormField>
            <FormLabel>Phone Number (Optional)</FormLabel>
            <Input />
          </FormField>
        </Row>
        <Title>Personal Address</Title>
        <Row>
          <FormField>
            <FormLabel>Country or Region</FormLabel>
            <Select options={REGIONS} handler={handleRegion} />
          </FormField>
          <FormField>
            <FormLabel>City</FormLabel>
            <Select options={currentRegion?.cities ?? []} handler={handleCity} />
          </FormField>
        </Row>
        <Row>
          <FormField>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input id="address" />
          </FormField>
          <FormField>
            <FormLabel>Postal Code</FormLabel>
            <Input />
          </FormField>
        </Row>
        <FormSubmit>
          <Button>Save</Button>
        </FormSubmit>
      </Form>
    </BlockContainer>
  )
}
