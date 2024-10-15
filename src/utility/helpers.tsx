const MONTH_MAP = new Map([
  ['01', 'Jan'],
  ['02', 'Feb'],
  ['03', 'Mar'],
  ['04', 'Apr'],
  ['05', 'May'],
  ['06', 'Jun'],
  ['07', 'Jul'],
  ['08', 'Aug'],
  ['09', 'Sep'],
  ['10', 'Oct'],
  ['11', 'Nov'],
  ['12', 'Dec'],
]);

export function getMonthName(monthIndex: string) {
  console.log(monthIndex);
  console.log(MONTH_MAP.get(monthIndex));
  return MONTH_MAP.get(monthIndex);
}

export function dateFormat(date: string) {
  const [year, monthIndex] = date.split('-');
  return `${getMonthName(monthIndex)} ${year}`;
}
