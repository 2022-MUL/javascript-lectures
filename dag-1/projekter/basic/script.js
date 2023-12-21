// async function call() {
//   let result = await fetch('https://api.jsonbin.io/v3/qs/62fe1b1c5c146d63ca746eda')
//   result = await result.json();
//   console.log(result)
  
//   result.record.forEach((dataObj) => {
//     fetch('https://mul3sem-default-rtdb.europe-west1.firebasedatabase.app/transactions.json', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(dataObj),
//     })
//   })
// }

async function getData() {
  let result = await fetch('https://mul3sem-default-rtdb.europe-west1.firebasedatabase.app/transactions.json')
  result = await result.json();
  console.log(result)
  const array = []
  for (let key in result) {
    array.push(result[key])
  }
  console.log(array)
}
