import React from 'react'
import { TableBody, TableContainer, TableHead, TableTd, TableTh, TableTr } from '../Table/styled'
import Checkbox from '../../Atoms/Checkbox/Checkbox'

const COLUMNS = '60px 0.7fr 1.3fr 1fr 0.6fr 0.6fr 50px'

export default function CustomersTable({ data, handlerCheckbox }) {
  return (
    <TableContainer>
      <TableHead>
        <TableTr gridTemplateColumns={COLUMNS}>
          <TableTh></TableTh>
          <TableTh>Customer name</TableTh>
          <TableTh>Email</TableTh>
          <TableTh>Location</TableTh>
          <TableTh>Orders</TableTh>
          <TableTh>Spent</TableTh>
          <TableTh></TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        {data?.map(item => (
          <TableTr key={item?.id} gridTemplateColumns={COLUMNS}>
            <TableTd>
              <Checkbox item={item} handler={handlerCheckbox} />
            </TableTd>
            <TableTd>{ item?.full_name }</TableTd>
            <TableTd>{ item?.email }</TableTd>
            <TableTd>{ item?.location }</TableTd>
            <TableTd>{ item?.orders } orders</TableTd>
            <TableTd>${ item?.spent }</TableTd>
            <TableTd>btn</TableTd>
          </TableTr>
        ))}
      </TableBody>
    </TableContainer>
  )
}
