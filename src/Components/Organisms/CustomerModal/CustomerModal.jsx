import React, { useState } from 'react'
import ModalTemplate from '../../Templates/ModalTemplate/ModalTemplate'
import { GridBlock } from '../../../Base/styled'
import Button from '../../Atoms/Button/Button'
import { Label } from './styled'
import Select from '../../Atoms/Select/Select'
import { LOCATIONS, TYPE_PRODUCTS } from '../../Pages/Customers/const';
import Input from '../../Atoms/Input/Input'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { createHandler } from '../../../Store/Slice/customersSlice'

export default function CustomerModal({closeHandler, submitHandler}) {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    id: null,
    full_name: "",
    email: "",
    location: null,
    orders: "",
    spent: "",
    type_product: null,
    date: null,
  })

  const locationsHandler = (location) => {
    setData(old => ({...old, location: location.value}))
  }

  const productsHandler = (type_product) => {
    setData(old => ({...old, type_product: type_product.value}))
  }

  const fullNameHandler = (full_name) => {
    setData(old => ({...old, full_name: full_name}))
  }

  const emailHandler = (email) => {
    setData(old => ({...old, email: email}))
  }

  const ordersHandler = (orders) => {
    setData(old => ({...old, orders: orders}))
  }

  const spentHandler = (spent) => {
    setData(old => ({...old, spent: spent}))
  }

  const createCustomer = () => {
    const id = Math.floor(Math.random() * 5000);
    const date = moment(new Date()).format('YYYY-MM-DD');
    dispatch(createHandler({...data, id: id, date: date}))
  }
  console.log(data);

  return (
    <ModalTemplate title="Customer" closeHandler={closeHandler}>
      <GridBlock gridColumns="1fr">
        <Label>Full Name</Label>
        <Input onChange={fullNameHandler} />
      </GridBlock>
      <GridBlock gridColumns="1fr">
        <Label>Email</Label>
        <Input onChange={emailHandler} />
      </GridBlock>
      <GridBlock gridColumns="1fr">
        <Label>Orders</Label>
        <Input onChange={ordersHandler} />
      </GridBlock>
      <GridBlock gridColumns="1fr">
        <Label>Spent</Label>
        <Input onChange={spentHandler} />
      </GridBlock>
      <GridBlock gridColumns="1fr">
        <Label>Locations</Label>
        <Select handler={locationsHandler} options={LOCATIONS} />
      </GridBlock>
      <GridBlock gridColumns="1fr">
        <Label>Type Product</Label>
        <Select handler={productsHandler} options={TYPE_PRODUCTS} />
      </GridBlock>
      <GridBlock gridColumns="1fr 1fr">
        <Button handler={closeHandler} type="transparent">Cancel</Button>
        <Button handler={createCustomer}>Save</Button>
      </GridBlock>
    </ModalTemplate>
  )
}
