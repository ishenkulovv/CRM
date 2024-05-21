import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate';
import { BlockContainer } from '../../../Base/styled';
import Tabs from '../../Molecules/Tabs/Tabs';
import { TABS_LIST, ordersList } from './const';
import Table from '../../Molecules/Table/Table';
import Search from '../../Atoms/Search/Search';

export default function Orders() {

  const [tabsList, setTabsList] = useState(TABS_LIST);
  const [search, setSearch] = useState('');
  const [data, setData] = useState(ordersList)
  useEffect(() => {
    searchByTitle(search.trimer())
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
  }

  const searchByTitle = (title) => {
    const sendData = ordersList.filter(item => item.title.toLowerCase().trim().includes(title.toLowerCase().trim()))
    console.log(sendData);
    setData(sendData)
  }

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <Search value={search} setValue={setSearch} />
        <Table data={data} />
      </BlockContainer>
    </MainTemplate>
  )
}
