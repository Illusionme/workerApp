onmessage = function(e) {
    console.log('Worker: Message received from main script');
    // var p = document.createElement("p");
    // document.body.appendChild(p);
    let result = e.data[0] * e.data[1];
    if (isNaN(result)) {
      postMessage('Please write two numbers');
    } else {
      let workerResult = 'Result: ' + result;
      console.log('Worker: Posting message back to main script');
      postMessage(workerResult);
    }
  }


//   addEventListener('fetch', event => {
//     event.respondWith(handleRequest(event.request))
//   })
  
//   /**
//    * Respond to the request
//    * @param {Request} request
//    */
//   async function handleRequest(request) {
//     return new Response('hello world', {status: 200})
//   }