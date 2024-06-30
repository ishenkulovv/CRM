import React from 'react'
import { Block, CheckboxBlock, Container, Footer, FormField, Label, Legend, NextButton, Page, SkipButton, SubTitle, Title } from './styled'
import Button from '../../Atoms/Button/Button'
import Select from '../../Atoms/Select/Select'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import { GridBlock } from '../../../Base/styled';

export default function UserSurvey() {
  return (
    <Page>
      <Title>Tell us about yourself</Title>
      <SubTitle>We’ll help you get started based on your responses</SubTitle>
      <Container>
        <Block>
          <FormField>
            <Label>Are you already selling?</Label>
            <Select />
          </FormField>
          <FormField>
            <Label>Where else would you like to sell online?</Label>
            <Legend>With Saleline’s platform, you can reach customers across multiple sales channels and make more sales.</Legend>
          </FormField>
          <GridBlock gridColumns="1fr 1fr">
            <FormField>
              <CheckboxBlock>
                <Checkbox item={{id: 'instagram'}} />
                <Label htmlFor='instagram'>Instagram</Label>
              </CheckboxBlock>
            </FormField>
            <FormField>
              <CheckboxBlock>
                <Checkbox item={{id: 'website'}} />
                <Label htmlFor='website'>Personal Website</Label>
              </CheckboxBlock>
            </FormField>
            <FormField>
              <CheckboxBlock>
                <Checkbox item={{id: 'facebook'}} />
                <Label htmlFor='facebook'>Facebook</Label>
              </CheckboxBlock>
            </FormField>
            <FormField>
              <CheckboxBlock>
                <Checkbox item={{id: 'other'}} />
                <Label htmlFor='other'>Other</Label>
              </CheckboxBlock>
            </FormField>
          </GridBlock>
          <FormField>
            <Label>What is your current revenue?</Label>
            <Select />
          </FormField>
          <FormField>
            <Label>Which industry will you be operating in?</Label>
            <Select />
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
