const sevenDayTime = (startDate = new Date()) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const sevenDays = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    sevenDays.push({
      id: i,
      day: daysOfWeek[currentDate.getDay()],
      date: currentDate.getDate(),
      month: currentDate.getMonth() + 1, // Months are 0-indexed
      year: currentDate.getFullYear(),
      fullDate: currentDate.toLocaleDateString(), // month/date/year
    });
  }

  return sevenDays;
};

export default sevenDayTime;
