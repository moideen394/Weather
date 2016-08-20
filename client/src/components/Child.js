var React=require('react');
var obj={};
var Child=React.createClass({

  componentDidMount:function()
  {
      obj.lat=this.props.details.coord.lat;
      obj.lon=this.props.details.coord.lon;
      obj.humidity=this.props.details.main.humidity;
      obj.pressure=this.props.details.main.pressure;
      obj.sunrise=this.props.details.sys.sunrise;
      obj.sunset=this.props.details.sys.sunset;
      obj.cloud=this.props.details.weather[0].description;
      obj.deg=this.props.details.wind.deg;
      obj.speed=this.props.details.wind.speed;
      $.ajax({
     url:'http://localhost:8081/data/',
     dataType: 'json',
     async :false,
     type: 'POST',
     data:obj,
     success: function(data)
     {
     console.log("success");
   }.bind(this),
   error: function(xhr, status, err) {
     console.log(err);
   }.bind(this)
});
  },
  render:function()
  {

return(
  <div>
  <table>
  <tr>
  <th>latitude</th>
  <td>{this.props.details.coord.lat}</td>
  </tr>
  <tr>
  <th>longitude</th>
  <td>{this.props.details.coord.lon}</td>
  </tr>
  <tr>
  <th>humidity</th>
  <td>{this.props.details.main.humidity}</td>
  </tr>
  <tr>
  <th>pressure</th>
  <td>{this.props.details.main.pressure}</td>
  </tr>
  <tr>
  <th>sunrise</th>
  <td>{this.props.details.sys.sunrise}</td>
  </tr>
  <tr>
  <th>sunset</th>
  <td>{this.props.details.sys.sunset}</td>
  </tr>
  <tr>
  <th>cloud</th>
  <td>{this.props.details.weather[0].description}</td>
  </tr>
  <tr>
  <th>degree</th>
  <td>{this.props.details.wind.deg}</td>
  </tr>
  <tr>
  <th>speed</th>
  <td>{this.props.details.wind.speed}</td>
  </tr>
</table>
  </div>);
}
})
module.exports=Child;
