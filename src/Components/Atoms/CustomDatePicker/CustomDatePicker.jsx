import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function CustomDatePicker({data, setData}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const searchByDate = (date) => {
    setStartDate(date)
    const results = data.filter(item => {
      return item.date === moment(date).format('YYYY-MM-DD');
    })
    setData(results)
  }

  const searchByDateRange = (startData, endData) => {
    const result = data.filter(item => {
      const itemDate = moment(item.date).format('YYYY-MM-DD');
      const start = moment(startData).format('YYYY-MM-DD');
      const end = moment(endData).format('YYYY-MM-DD');;
      return itemDate >= start && itemDate <= end;
    });
    setData(result)
  }

  return (
    <div>
      {/* <DatePicker selected={startDate} onChange={searchByDate} /> */}
      <DatePicker 
        selected={startDate} 
        startDate={startDate} 
        endDate={endDate} 
        selectsRange 
        onChange={(dates) => {
          console.log(dates);
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
          searchByDateRange(start, end)
        }} 
      />
    </div>
  )
}
