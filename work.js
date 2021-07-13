const fs = require('fs');
const { exit } = require('process');
/**
 * Create icons for KLWP
 * @param {JSON} inFileLocation - Input json file location 
 * @param {JSON} outFileLocation - Output json file location
 */
function createKLWPIcon(inFileLocation, outFileLocation){
    const raw = require(inFileLocation);
    let res = {
        "IcoMoonType": "selection",
        "icons": [],
        "height": 1024,
        "metadata": { "name": raw.name, "url": "https://fake.net/", "designer": "Invalid", "designerURL": "https://twitter.com/invalid", "licenseURL": "https://invalid.net/license.php" },
        "preferences": {
            "showGlyphs": true,
            "showCodes": false,
            "showQuickUse": true,
            "showQuickUse2": true,
            "showSVGs": true,
            "fontPref": {
                "prefix": "icon-",
                "metadata": {
                    "fontFamily": raw.name,
                    "majorVersion": 1,
                    "minorVersion": 0,
                    "fontURL": "https://invalid.net/",
                    "description": "Got it from Fontello",
                    "copyright": "",
                    "designerURL": "https://twitter.com/invalid",
                    "designer": "Burgioluca",
                    "licenseURL": "https://invalid.net/license.php"
                },
                "metrics": { "emSize": 1024, "baseline": 6.25, "whitespace": 50 },
                "embed": false,
                "showSelector": false,
                "showMetrics": false,
                "includeMetadata": true,
                "showMetadata": false,
                "noie8": true,
                "ie7": false,
                "showVersion": false
            },
            "imagePref": { "prefix": "icon-", "png": true, "useClassSelector": true, "color": 0, "bgColor": 16777215, "name": "icomoon", "classSelector": ".icon" },
            "historySize": 50,
            "showLiga": false,
            "gridSize": 16,
            "showGrid": true
        }
    }
    
    for(let i=0; i<raw.glyphs.length; i++){
        let curr = {
            "icon": {
                "paths": [raw.glyphs[i].svg.path],
                "attrs": [{}],
                "isMulticolor": false,
                "isMulticolor2": false,
                "grid": 0,
                "tags": [raw.glyphs[i].css],
            },
            "attrs": [{}],
            "properties": { "order": i+1, "id": i, "name": raw.glyphs[i].css, "prevSize": 32, "code": raw.glyphs[i].code },
            "setIdx": 0,
            "setId": 0,
            "iconIdx": 3
        }
        res.icons.push(curr);
    }

    let result = JSON.stringify(res);
    fs.writeFile(outFileLocation, result, 'utf8', ()=>{console.log('done');});
    
}

if(!process.argv[2]){
    console.error('Please enter the path of input json file');
    exit(0);
}else{
    if(!process.argv[3]){
        console.error('Please enter the path of output json file');
        exit(0);
    }else{
        createKLWPIcon(process.argv[2], process.argv[3]);
    }
}
