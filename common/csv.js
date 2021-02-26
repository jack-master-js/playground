// Require the csv module
const csv = require('csv')
// Print 10 records
csv.generate({length: 10}).pipe(process.stdout)