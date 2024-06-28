import React, { useState } from 'react'
import AuthTemplate from '../../Templates/AuthTemplate/AuthTemplate'
import { Content, ErrorText, Form, FormButton, FormField, Title } from './styled'
import Input from '../../Atoms/Input/Input'
import { FlexBlock } from '../../../Base/styled'
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../Atoms/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../../Store/Slice/usersSlice'

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)

  const handleChange = (value) => {
    setValue(value);
  }

  const validate = () => {
    setError(!validator(value))
    return validator(value)
  }

  return {
    value,
    error,
    handleChange,
    validate
  }
}

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase())
const validatePassword = (password) => password?.length >= 6

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const users = useSelector(state => state.rootReducer?.usersSlice?.users)

  const email = useInput('', validateEmail)
  const password = useInput('', validatePassword)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const validEmail = email.validate();
    const validPassword = password.validate();

    if (validEmail && validPassword) {
      const user = users?.find((user => user.email === email.value && user.password === password.value))
      if (user) {
        dispatch(setCurrentUser(user))
        navigate('/')
      } else {
        alert('Invalid email or password')
      }
    }
  }

  return (
    <AuthTemplate>
      <Content>
        <Title>Login to your account</Title>
        <Form>
          <FormField>
            <Input onChange={email.handleChange} type="email" />
            {email.error ? (
              <ErrorText>Email is not valid</ErrorText>
            ) : null}
          </FormField>
          <FormField>
            <Input onChange={password.handleChange} type="password" />
            {password.error ? (
              <ErrorText>Password length must be greater than 5</ErrorText>
            ) : null}
          </FormField>
          <FlexBlock marginTop="24px" justifyContent="space-between">
            <Checkbox item={{id: 'remember'}} />
            <NavLink to="/forgot-password">Forgot Password?</NavLink>
          </FlexBlock>
          <FormButton>
            <Button handler={handleSubmit}>Sign in with email</Button>
          </FormButton>
        </Form>
      </Content>
    </AuthTemplate>
  )
}
