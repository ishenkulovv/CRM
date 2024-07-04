import React from 'react'
import { Block, CheckboxBlock, Container, Footer, FormField, Label, Legend, NextButton, Page, SkipButton, SubTitle, Title } from '../UserSurvey/styled'
import Button from '../../Atoms/Button/Button'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import { GridBlock } from '../../../Base/styled';
import Select from '../../Atoms/Select/Select';
import Input from '../../Atoms/Input/Input';

export default function AddAddress() {
  return (
    <Page>
      <Title>Add an address so you can get paid</Title>
      <SubTitle>This will be used as your default business address. You can change it later</SubTitle>
      <Container>
        <Block>
          <FormField>
            <Label>Country or region</Label>
            <Select />
          </FormField>
          <GridBlock gridColumns="1fr 1fr">
            <FormField>
              <Label>First name</Label>
              <Input />
            </FormField>
            <FormField>
              <Label>Last name</Label>
              <Input />
            </FormField>
          </GridBlock>
          <FormField>
            <Label>Address</Label>
            <Input />
          </FormField>
          <FormField>
            <Label>City</Label>
            <Select />
          </FormField>
          <FormField>
            <Label>Postal Code</Label>
            <Input />
          </FormField>
        </Block>
      </Container>
      <Footer>
        <Container>
          <SkipButton>
            <Button type="transparent-dark">Skip</Button>
          </SkipButton>
          <NextButton>
            <Button>Next</Button>
          </NextButton>
        </Container>
      </Footer>
    </Page>
  )
}
