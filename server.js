const express = require('express')

const app = express ()

// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-random', 'hello')
//     }
// }

// app.use(express.static('public', options))

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*'])
//     res.append('Access-Control-Allow-Methods', 'GET')
//     res.append('Access-Control-Allow-Headers', 'Content-Type')
//     next()
// })

app.set('etag', false); 

app.get('/', (req, res) => {
    res.set('Content-Security-Policy', 'script-src *.netlify.com; worker-src blob:')
    // res.set('Access-Control-Allow-Origin', '*')
    res.sendFile('/Users/chirumam/Documents/Node Apps/TestApp/index.html')
})

// app.get('/main.js', (req, res) => {
//     res.sendFile('/Users/chirumam/Documents/Node Apps/TestApp/main.js')
// })

// app.get('/worker.js', (req, res) => {
//     res.sendFile('https://vigorous-gates-86c4d7.netlify.com/worker.js')
// })

app.get('/style.css', (req, res) => {
    res.sendFile('/Users/chirumam/Documents/Node Apps/TestApp/style.css')
})

app.listen(3000);