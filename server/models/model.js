var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var weatherSchema = mongoose.Schema(
  {
    lat:String,
    lon:String,
    humidity:String,
    pressure:String,
    sunrise:String,
    sunset:String,
    cloud:String,
    deg:String,
    speed:String,
}
)
module.exports = mongoose.model('data', weatherSchema,'data');
