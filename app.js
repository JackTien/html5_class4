var request = require ('superagent');

request
	.get('http://api.openweathermap.org/data/2.5/weather')
	.query({
		q:'Taipei',
		units:'metric',
		APPID:'da588028e432fb9d877ea7b20add041b'
	})
	.end(function(err,res){
		console.log(res.body)
	});