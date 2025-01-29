module.exports.server = start;


function start() {
    const controllersInit= require('./controllers.cjs').controllersInit;

    const express = require('express')
    const app = express()
    const port = 3000

    controllersInit(app);

    app.set('views', './server/views');
    app.set('view engine', 'pug');

    app.use(express.static('public'))

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}