fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
    })
    .catch(function() {
        
    })