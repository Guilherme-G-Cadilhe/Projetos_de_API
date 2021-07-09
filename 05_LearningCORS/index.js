fetch('http://localhost:3000/data', { method: 'get', credentials: 'include' })
  .then((res) => res.json())
  .then((data) => console.log(data));
