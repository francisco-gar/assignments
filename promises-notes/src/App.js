// axios.get('https://someurl.com')
//   .then((response) => {
//     // code to run upon resolution
//   })
//   .catch((err) => {
//     // code to run upon rejection
//   })



const flipCoin = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() < .5 ? res('heads') : rej('tails');
    }, 1500)
  })
}

flipCoin()
  .then(result => {
console.log(result);
  })
  .catch(result => {
    console.log(reasult);
  })

  // const get = url => {
  //   return new Promise((res, rej) => {
  //     const xhr = new XMLHttpRequest();
  //     // do a bunch of config

  //     xhr.onreadystatechange = function(){
  //       //if the request status is 200 and ready state is 4 we'll resolve
  //       // the rpomise with th data
  //       //otherwise, we'll rejectt he promise with an erro
  //       if(xhr.readyState === 4 && xhr.status = 200){
  //         res(xhr.body);
  //         if(xhr.status === 404){
  //           rej(Error('data unavilable'))
  //         }
  //       }
  //     }
  //   })
  // }