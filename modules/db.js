var fs = require('fs');


function readAgencies() {
    var agencies = JSON.parse(fs.readFileSync('agencies.json'));
    return agencies;
}

function saveAgencies(agencies) {
    var str_agencies = JSON.stringify(agencies);
    fs.writeFile('agencies.json', str_agencies, function () {
        console.log("write good");
    });
}

module.exports = {
    readAgencies: readAgencies,
    saveAgencies: saveAgencies
}