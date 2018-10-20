var ts = require('tail-stream');
var mail = require('./alert');

var fileLocation = process.env.FILE_LOCATION;
var tsObject = ts.createReadStream(fileLocation, {
    beginAt: 0,
    onMove: 'follow',
    detectTruncate: true,
    onTruncate: 'end',
    endOnError: false
});

tsObject.on('data', function(data) {
    let strData = data.toString();
    console.log(strData);
    mail.sendEmail(strData);
});
