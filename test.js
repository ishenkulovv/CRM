const searchByDate = (date) => {
  const result = ordersList.filter(item => {
    console.log(item.date, moment(date).format('YYYY-MM-DD'));
    return item.date === moment(date).format('YYYY-MM-DD')
  });
  setData(result)
}

const searchByDateRange = (startData, endData) => {
  const result = ordersList.filter(item => {
    const itemDate = new Date(item.date);
    const start = new Date(startData);
    const end = new Date(endData);
    return itemDate >= start && itemDate <= end;
  });
  setData(result)
}

<DatePicker selected={startDate} dateFormat="MMM YY" startDate={startDate} endDate={endDate} selectsRange onChange={(dates) => {
  const [start, end] = dates;
  setStartDate(start);
  setEndDate(end);
  searchByDateRange(start, end)
// searchByDate(date)
}} />