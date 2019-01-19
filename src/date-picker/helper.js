export default {
  firstDayOfMonth(date) {
    let [year, month, day] = getYearMonthDate(date);
    return new Date(year, month, 1);
  },
  lastDayOfMonth(date) {
    let [year, month, day] = getYearMonthDate(date);
    return new Date(year, month + 1, 0);
  },
  // [begin, end)
  range(begin, end) {
    let array = [];
    for (let i = begin; i < end; i++) {
      array.push(i);
    }
    return array;
  },
  getYearMonthDate,
  addMonth(date, n) {
    const [_1, month, _2] = getYearMonthDate(date);
    const newMonth = month + n;
    const copy = new Date(date);
    copy.setMonth(newMonth);
    return copy;
  },
  addYear(date, n) {
    const [year] = getYearMonthDate(date);
    const newYear = year + n;
    const copy = new Date(date);
    copy.setFullYear(newYear);
    return copy;
  },
  pad2(number){
    if(typeof number !== 'number'){
      throw new Error('wrong param')
    }
    return (number >= 10 ? '' : '0') + number
  }
};

function getYearMonthDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return [year, month, day];
}
