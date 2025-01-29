module.exports.parseDate = parseDate;
module.exports.parseWeather = parseWeather;


const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function parseDate() {
    const resp = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe/Berlin');
    const json = await resp.json();
    return json;
}

async function parseWeather() {
   const resp= await fetch("https://www.timeanddate.com/weather/germany/berlin");
   const html=await resp.text();
   const dom = new JSDOM(html);
   const panelQuick=dom.window.document.getElementById('qlook');
   const celcium=panelQuick.getElementsByClassName("h2").item(0).textContent;
   return celcium;
}