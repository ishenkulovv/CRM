import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate'
import { BlockContainer, FlexBlock } from '../../../Base/styled'
import CustomersHeader from '../../Molecules/CustomersHeader/CustomersHeader'
import CustomersTable from '../../Molecules/CustomersTable/CustomersTable'
import { useDispatch, useSelector } from 'react-redux'
import FilterButton from '../../Atoms/FilterButton/FilterButton'
import Search from '../../Atoms/Search/Search'
import { searchHandler } from '../../../Store/Slice/customersSlice'

export default function Customers() {
  const dispatch = useDispatch()

  const data = useSelector(state => state?.rootReducer?.customersSlice?.data)

  const [search, setSearch] = useState('');
  const [filtersShow, setFiltersShow] = useState(false)

  useEffect(() => {
    searchByName(search.trim())
  }, [search])

  const searchByName = (full_name) => dispatch(searchHandler(full_name))
  return (
    <MainTemplate title="Customers">
      <CustomersHeader />
      <BlockContainer marginTop="24px">
        <FlexBlock justifyContent="space-between" alignItems="center">
          <Search placeholder="Search by name, email, or others..." value={search} setValue={setSearch} />
          <FilterButton active={filtersShow} setFilters={setFiltersShow} />
        </FlexBlock>
        <CustomersTable data={data} />
      </BlockContainer>
    </MainTemplate>
  )
}
