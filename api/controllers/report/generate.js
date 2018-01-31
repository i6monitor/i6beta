var XlsxTemplate = require('xlsx-template');
var fs = require('fs');
var path = require('path');
var Moment = require('moment');

module.exports = function (req,res) {
    var template_path = path.join(process.cwd(), 'user_data', 'report_templates', 'template1.xlsx');
    var output_cache = path.join(process.cwd(), 'user_data', 'report_templates', 'Logsheet.xlsx');

    fs.readFile(template_path, function(err, data) {

        // Create a template
        var template = new XlsxTemplate(data);

        // Replacements take place on first sheet
        var sheetNumber = 1;

        Datalog.find({
            limit: 20,
            sort: 'createdAt DESC'
        })
        
        .exec((err, records)=>{
            
            records.forEach(record => {
                record.waktu = Moment(new Date(record.createdAt)).format('HH:mm:ss');
            });

            // Set up some placeholder values matching the placeholders in the template
            var values = {
                operator : 'Joni Lanang',
                tanggal: Moment().format('DD-MM-YYYY'),
                tags: records
            };

            // Perform substitution
            template.substitute(sheetNumber, values);

            // Get binary data
            var binaryData = template.generate();

            //Write report file
            fs.writeFile (output_cache, binaryData, 'binary', function(err) {
                res.download(output_cache, function(err){
                    fs.unlinkSync(output_cache);            
                });
            });
        });


    });
}