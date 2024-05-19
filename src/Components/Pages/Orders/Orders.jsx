import React, { useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate';
import { BlockContainer } from '../../../Base/styled';
import Tabs from '../../Molecules/Tabs/Tabs';
import { TABS_LIST } from './const';
import Table from '../../Molecules/Table/Table';

export default function Orders() {

  const [tabsList, setTabsList] = useState(TABS_LIST);

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

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <Table />
      </BlockContainer>
    </MainTemplate>
  )
}
