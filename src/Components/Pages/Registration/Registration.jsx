import React from 'react'
import AuthTemplate from '../../Templates/AuthTemplate/AuthTemplate'
import { Content, Form, FormButton, FormField, Title } from '../Login/styled'
import { GridBlock } from '../../../Base/styled'
import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Button/Button'

export default function Registration() {
  return (
    <AuthTemplate>
      <Content>
        <Title>Create your Salesline ID</Title>
        <Form>
          <GridBlock gridColumns="1fr 1fr">
            <FormField>
              <Input placeholder='Enter first name' />
            </FormField>
            <FormField>
              <Input placeholder='Enter last name' />
            </FormField>
          </GridBlock>
          <FormField>
            <Input type="email" placeholder='Enter email' />
          </FormField>
          <FormField>
            <Input type="password" placeholder='Enter password' />
          </FormField>
          <FormButton>
            <Button>Sign up with email</Button>
          </FormButton>
        </Form>
      </Content>
    </AuthTemplate>
  )
}
