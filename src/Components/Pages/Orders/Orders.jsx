import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate';
import { BlockContainer } from '../../../Base/styled';
import Tabs from '../../Molecules/Tabs/Tabs';
import { TABS_LIST, ordersList } from './const';
import Table from '../../Molecules/Table/Table';
import Search from '../../Atoms/Search/Search';
import CustomDatePicker from '../../Atoms/CustomDatePicker/CustomDatePicker';
import FilterButton from '../../Atoms/FilterButton/FilterButton';

export default function Orders() {
  const [tabsList, setTabsList] = useState(TABS_LIST);
  const [search, setSearch] = useState('');
  const [data, setData] = useState(ordersList)
  const [filtersShow, setFiltersShow] = useState(false)
  useEffect(() => {
    searchByTitle(search.trim())
  }, [search])


  const setTab = (id) => {
    const data = tabsList.map(tab => {
      if (tab.id === id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
      return tab;
    })
    setTabsList(data);
    searchByStatus(id)
  }

  const searchByStatus = (id) => {
    const sendData = ordersList.filter(item => {
      return id === 'all' ? item : item.status.toLowerCase() === id.toLowerCase()
    })
    setData(sendData)
  }

  const searchByTitle = (title) => {
    const sendData = ordersList.filter(item => item.title.toLowerCase().trim().includes(title.toLowerCase().trim()))
    setData(sendData)
  }

  const searchByPrice = (e) => {
    const value = e.target.value;
    const sendData = ordersList.filter(item => {
      return value === 'none' ? item : item.price === value
    })
    setData(sendData)
  }

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <Search value={search} setValue={setSearch} />
        <CustomDatePicker data={ordersList} setData={setData} />
        <FilterButton active={filtersShow} setFilters={setFiltersShow} />
        {filtersShow ? (
          <div>
            <select name="" id="" onChange={searchByPrice}>
              <option value="none">Select average price</option>
              <option value="350">$350</option>
              <option value="450">$450</option>
              <option value="1200">$1200</option>
              <option value="2500">$2500</option>
            </select>
          </div>
        ) : null}
        <Table data={data} />
      </BlockContainer>
    </MainTemplate>
  )
}
