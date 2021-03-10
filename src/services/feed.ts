async function loadData(callback: Function) {
  const response = await fetch('http://10.0.2.2:3030/feed');
  const data = await response.json();

  callback(data);
}

export default loadData;
