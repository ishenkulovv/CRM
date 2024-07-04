import React, { useState } from 'react'
import AuthTemplate from '../../Templates/AuthTemplate/AuthTemplate'
import { Content, ErrorText, Form, FormButton, FormField, Title } from '../Login/styled'
import { FlexBlock, GridBlock } from '../../../Base/styled'
import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Button/Button'
import { useInput } from '../../../Hooks/useInput'
import { validateEmail, validatePassword, validateText } from '../../../Utils/validation'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import { Label } from '../UserSurvey/styled'
import { toast } from 'react-toastify'

export default function Registration() {
  const users = useSelector(state => state.rootReducer?.usersSlice?.users);
  const navigate = useNavigate();

  const first_name = useInput('', validateText);
  const last_name = useInput('', validateText);
  const email = useInput('', validateEmail);
  const password = useInput('', validatePassword);
  const [terms, setTerms] = useState(false)

  const searchSimilarUser = () => {
    const similar = users?.find((user) => email.value === user.email)
    return !!similar
  }

  const handleCheckbox = (id, status) => {
    setTerms(status)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validFirstName = first_name.validate();
    const validLastName = last_name.validate();
    const validEmail = email.validate();
    const validPassword = password.validate();

    if (validFirstName && validLastName && validEmail && validPassword) {
      if (!terms) {
        toast.error('Please read and check terms')
        return
      }
      if (!searchSimilarUser()) {
        navigate('/user-survey')
      } else {
        toast.error('This email is already')
      }
    } else {
      toast.error('Please enter correct all inputs')
    }
  }
  
  return (
    <AuthTemplate>
      <Content>
        <Title>Create your Salesline ID</Title>
        <Form>
          <GridBlock gridColumns="1fr 1fr">
            <FormField>
              <Input onChange={first_name.handleChange} placeholder='Enter first name' />
              {first_name.error ? (
                <ErrorText>First name length must be greater then 2</ErrorText>
              ) : null}
            </FormField>
            <FormField>
              <Input onChange={last_name.handleChange} placeholder='Enter last name' />
              {last_name.error ? (
                <ErrorText>Last name length must be greater then 2</ErrorText>
              ) : null}
            </FormField>
          </GridBlock>
          <FormField>
            <Input onChange={email.handleChange} type="email" placeholder='Enter email' />
            {email.error ? (
              <ErrorText>Email is not valid</ErrorText>
            ) : null}
          </FormField>
          <FormField>
            <Input onChange={password.handleChange} type="password" placeholder='Enter password' />
            {email.error ? (
              <ErrorText>Password length must be greater than 5</ErrorText>
            ) : null}
          </FormField>
          <FlexBlock>
            <Checkbox handler={handleCheckbox} item={{id: 'terms'}} />
            <Label htmlFor='terms'>By proceeding, you agree to the Terms and Conditions</Label>
          </FlexBlock>
          <FormButton>
            <Button handler={handleSubmit}>Sign up with email</Button>
          </FormButton>
        </Form>
      </Content>
    </AuthTemplate>
  )
}
