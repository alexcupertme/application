var data1, data_2, data;

const fetchData1 = function () {
  return fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (response.ok) {
        return response.json();}

        else if (response.ok !== true || response === undefined) {
          throw new Error('Network error');
        }
    })
    .then((data) => {
      data1 = data;
    })
    .catch((e) => console.error('Error fetching data1:', e));
};

function fethData2() {
  fetch('http://jsonplaceholder.typicode.com/todos/2')
    .then((response) => response.json())
    .then((data) => {
      data_2 = data;
    });
}

async function fetchData3() {
  const response = await fetch('http://jsonplaceholder.typicode.com/todos/3');
  data = await response.json();
}

fetchData1();
fethData2();
fetchData3();

setTimeout(() => {
  console.log('Data1:', data1);
  console.log('Data2:', data_2);
  console.log('Data3:', data);
}, 3000);


// Вывести стратегию рефакторинга, зарефакторить код. Доп. задание (опционально)