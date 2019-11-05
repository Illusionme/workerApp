const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
	// This is how I tried initially
	// const myWorker = new Worker("https://vigorous-gates-86c4d7.netlify.com/worker.js");

	const myWorker = function createWorker (workerUrl) {
		var worker = null;
		var blob;
		blob = new Blob(["importScripts('" + workerUrl + "');"], { "type": 'application/javascript' });
		var url = window.URL || window.webkitURL;
		var blobUrl = url.createObjectURL(blob);
		worker = new Worker(blobUrl);
		return worker;
	};

	const newWorker = myWorker("https://vigorous-gates-86c4d7.netlify.com/worker.js")

	first.onchange = function() {
	  newWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	second.onchange = function() {
	  newWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	newWorker.onmessage = function(e) {
		result.innerHTML = e.data;
		console.log('Message received from worker');
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}