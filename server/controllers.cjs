module.exports.controllersInit = controllersInit;

function controllersInit(app) {
    const parserData = require('./../parserData.cjs');

    app.get('/', (req, res) => {
        parserData.parseDate().then(async x => {
            const celcium = await parserData.parseWeather();
            res.render('main.pug', { title: 'Hey', time: x.time, temp: celcium });
        })
    })
}