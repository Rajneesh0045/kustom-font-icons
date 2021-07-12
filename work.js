const raw = require('./config.json');
var drip = require('./Dripicon.json');
const fs = require('fs');


console.log(raw.glyphs.length);
console.log(drip.icons[201]);

for(let i=0; i<raw.glyphs.length; i++){
    
    drip.icons[i].icon.paths = [raw.glyphs[i].svg.path];
    drip.icons[i].icon.tags = [raw.glyphs[i].css];
    
    drip.icons[i].properties.name = raw.glyphs[i].css;
    drip.icons[i].properties.code = raw.glyphs[i].code;
    drip.icons[i].properties.id = i;
    drip.icons[i].properties.order = i+1;
}
drip.icons.length = 200;

let result = JSON.stringify(drip);
fs.writeFile('Drip-fin.json', result, 'utf8', ()=>{console.log('done');});


