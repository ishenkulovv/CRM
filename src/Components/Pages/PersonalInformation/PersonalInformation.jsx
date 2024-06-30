import React, { useState } from 'react'
import { BlockContainer } from '../../../Base/styled'
import { Form, FormField, FormLabel, FormSubmit, HR, Row, Title, UploaderActions, UploaderAdd, UploaderBlock, UploaderDelete, UploaderImage, UploaderInput, UploaderText } from './styled'
import Input from '../../Atoms/Input/Input'
import Select from '../../Atoms/Select/Select'
import Button from '../../Atoms/Button/Button'
import { REGIONS } from './const';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../../Store/Slice/usersSlice'

export default function PersonalInformation() {
  const dispatch = useDispatch()

  const user = useSelector(state => state.rootReducer?.usersSlice.current_user)

  const [image, setImage] = useState(user?.avatar ?? null)
  const [currentRegion, setCurrentRegion] = useState(null)
  const [currentCity, setCurrentCity] = useState(null)

  const [data, setData] = useState(user)

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result)
        dispatch(setCurrentUser({...data, avatar: event.target.result}))
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleInput = (value, id) => {
    // setData((old) => ({...old, [id]: value}))

    setData(old => {
    // OLD = data
      return {
    // Здесь происходит копия нашего объекта data
        ...old,
    // Здесь с помощью переменной id мы находим именно тот ключ 
    // который мы должны поменять
    // а value это у нас то значение которые мы пишем в input'e
        [id]: value,
      }
    })
  }

  const handleImageRemove = () => {
    setImage(null)
    dispatch(setCurrentUser({...data, avatar: null}))
  }

  const handleRegion = (option) => {
    setCurrentRegion(option)
    setData(old => ({...old, country: option?.label}))
  }

  const handleCity = (option) => {
    setCurrentCity(option);
    setData(old => ({...old, city: option?.label}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setCurrentUser({...data, avatar: image}))
  }

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
            <Input onChange={(value) => handleInput(value, 'first_name')} value={data?.first_name} id="first_name" />
          </FormField>
          <FormField>
            <FormLabel>Last name</FormLabel>
            <Input onChange={(value) => handleInput(value, 'last_name')} value={data?.last_name} />
          </FormField>
        </Row>
        <Row>
          <FormField>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input  onChange={(value) => handleInput(value, 'email')} value={data?.email} id="email" />
          </FormField>
          <FormField>
            <FormLabel>Phone Number (Optional)</FormLabel>
            <Input onChange={(value) => handleInput(value, 'phone')} value={data?.phone} />
          </FormField>
        </Row>
        <Title>Personal Address</Title>
        <Row>
          <FormField>
            <FormLabel>Country or Region</FormLabel>
            <Select value={data?.country} options={REGIONS} handler={handleRegion} />
          </FormField>
          <FormField>
            <FormLabel>City</FormLabel>
            <Select value={data?.city} options={currentRegion?.cities ?? []} handler={handleCity} />
          </FormField>
        </Row>
        <Row>
          <FormField>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input onChange={(value) => handleInput(value, 'address')} value={data?.address} id="address" />
          </FormField>
          <FormField>
            <FormLabel>Postal Code</FormLabel>
            <Input onChange={(value) => handleInput(value, 'postal_code')} value={data?.postal_code} />
          </FormField>
        </Row>
        <FormSubmit>
          <Button handler={handleSubmit}>Save</Button>
        </FormSubmit>
      </Form>
    </BlockContainer>
  )
}
