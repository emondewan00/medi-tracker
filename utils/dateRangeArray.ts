// date range array

const dateRangeArray = (startDate: number, endDate: number) => {
  const dates = [];
  let currentDate = new Date(startDate);
  const lastDate = new Date(endDate);
  while (currentDate <= lastDate) {
    dates.push(currentDate.toLocaleDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

export default dateRangeArray;
