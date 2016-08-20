var React=require('react');
var Child=require('./Child');
var loadeddata = false;
var Weather=React.createClass({
   getInitialState:function(){
     return({datas:[]})
   },
   getDatas:function(){

    var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.refs.city.value+'&appid=ba1864231b2c79b4af13a8f81e81f53e',
      dataType: 'json',
      async:false,
      type: 'GET',
      success: function(data)
      {

          this.setState({datas:data});
          loadeddata=true;

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this),
   });

 },

  render:function(){
     var call;

    if(loadeddata)
    {

      call=<Child details={this.state.datas}/>;
    }

    return(
      <div>
          <input type="text"  ref="city" placeholder="Search" />
          <button type="submit" className="btn btn-default" onClick={this.getDatas}>AddData</button>
        {call}
      </div>
    );
  }
})
module.exports=Weather
