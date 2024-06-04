import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate';
import { BlockContainer } from '../../../Base/styled';
import Tabs from '../../Molecules/Tabs/Tabs';
import { TABS_LIST, ordersList, PAYMENT_OPTIONS } from './const';
import Table from '../../Molecules/Table/Table';
import Search from '../../Atoms/Search/Search';
import CustomDatePicker from '../../Atoms/CustomDatePicker/CustomDatePicker';
import FilterButton from '../../Atoms/FilterButton/FilterButton';
import Select from '../../Atoms/Select/Select';
import { FlexRow } from './styled';
import Button from '../../Atoms/Button/Button';
import ModalTemplate from '../../Templates/ModalTemplate/ModalTemplate';
import RemoveModal from '../../Organisms/RemoveModal/RemoveModal';
import { useDispatch, useSelector } from 'react-redux';
import { checkedForRemove, removeHandler, searchHandler } from '../../../Store/Slice/ordersSlice';

export default function Orders() {

  const dispatch = useDispatch()

  const [tabsList, setTabsList] = useState(TABS_LIST);
  const [search, setSearch] = useState('');
  // const [data, setData] = useState(ordersList?.map(item => ({...item, checked: false})))
  const data = useSelector(state => state?.rootReducer?.ordersSlice?.data)
  console.log(data);
  const [filtersShow, setFiltersShow] = useState(false)
  const [currentPayment, setCurrentPayment] = useState(null)
  const [visibleRemove, setVisibleRemove] = useState(false)

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

  const searchByTitle = (title) => dispatch(searchHandler(title))

  const searchByPrice = (e) => {
    const value = e.target.value;
    const sendData = ordersList.filter(item => {
      return value === 'none' ? item : item.price === value
    })
    setData(sendData)
  }

  const searchByPayment = (payment) => {
    const value = payment?.value

    const sendData = ordersList.filter(item => {
      if (!value) return item;
      return item?.payment_status?.toLowerCase()?.trim() === value?.toLowerCase()?.trim()
    })
    setData(sendData)
  }

  const checkedHandler = (id, status) => dispatch(checkedForRemove({id, status}));

  const removeOrder = () => dispatch(removeHandler())

  const showRemove = () => setVisibleRemove(true);
  const hideRemove = () => setVisibleRemove(false);

  return (
    <MainTemplate title="Orders">
      {visibleRemove ? <RemoveModal closeHandler={hideRemove} submitHandler={removeOrder} /> : null}
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <FlexRow>
          <Search value={search} setValue={setSearch} />
          {/* <CustomDatePicker data={ordersList} setData={setData} /> */}
          <FilterButton active={filtersShow} setFilters={setFiltersShow} />
          <Button handler={showRemove}>Remove order</Button>
        </FlexRow>
        {filtersShow ? 
          (
            <Select options={PAYMENT_OPTIONS} handler={searchByPayment} />
          )
          :
          null
        }
        <Table data={data} handlerCheckbox={checkedHandler} />
      </BlockContainer>
    </MainTemplate>
  )
}
