import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate'
import { BlockContainer, FlexBlock, GridBlock } from '../../../Base/styled'
import CustomersHeader from '../../Molecules/CustomersHeader/CustomersHeader'
import CustomersTable from '../../Molecules/CustomersTable/CustomersTable'
import { useDispatch, useSelector } from 'react-redux'
import FilterButton from '../../Atoms/FilterButton/FilterButton'
import Search from '../../Atoms/Search/Search'
import { filterBySpent, searchHandler, searchLocationHandler, searchProductHandler, setData } from '../../../Store/Slice/customersSlice'
import { CUSTOMERS, LOCATIONS, SPENTS, TYPE_PRODUCTS } from './const'
import Select from '../../Atoms/Select/Select'
import CustomDatePicker from '../../Atoms/CustomDatePicker/CustomDatePicker'

export default function Customers() {
  const dispatch = useDispatch()

  const data = useSelector(state => state?.rootReducer?.customersSlice?.data)

  const [search, setSearch] = useState('');
  const [filtersShow, setFiltersShow] = useState(false)

  useEffect(() => {
    searchByName(search.trim())
  }, [search])

  const searchByName = (full_name) => dispatch(searchHandler(full_name))

  const searchByLocation = (location) => dispatch(searchLocationHandler(location))

  const searchByDate = (results) => dispatch(setData(results));

  const searchByProduct = (product) => dispatch(searchProductHandler(product))

  const filterSpend = (spend) => dispatch(filterBySpent(spend))

  return (
    <MainTemplate title="Customers">
      <CustomersHeader />
      <BlockContainer marginTop="24px">
        <FlexBlock justifyContent="space-between" alignItems="center">
          <Search placeholder="Search by name, email, or others..." value={search} setValue={setSearch} />
          <FilterButton active={filtersShow} setFilters={setFiltersShow} />
        </FlexBlock>
        <GridBlock gridColumns="1fr 1fr 1fr 1fr">
          <Select options={LOCATIONS} handler={searchByLocation} />
          <Select options={SPENTS} handler={filterSpend} />
          <CustomDatePicker data={CUSTOMERS} setData={searchByDate} />
          <Select options={TYPE_PRODUCTS} handler={searchByProduct} />
        </GridBlock>
        <CustomersTable data={data} />
      </BlockContainer>
    </MainTemplate>
  )
}
