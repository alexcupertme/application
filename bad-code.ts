import axios from 'axios';

const baseURL = 'http://jsonplaceholder.typicode.com/todos/';

async function getData(id: number) {
  try {
    const res = await axios.get(baseURL + id)
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error('Network error');
  }
}

const data1 = getData(1);
const data2 = getData(2);
const data3 = getData(3);


console.log('Data1:', data1);
console.log('Data2:', data2);
console.log('Data3:', data3);


// Вывести стратегию рефакторинга, зарефакторить код. Доп. задание (опционально)