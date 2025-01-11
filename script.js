const key = "3b94f0dcbd40594f0201166ac3344e9c"
const url="https://api.openweathermap.org/data/2.5/weather?appid="+key+"&units=metric"
const prefix="https://openweathermap.org/img/wn/"
const suffix="@2x.png"
function getWeather(e){
    e.preventDefault()
    let q = $("#query").val()
    let req_url=url+"&q="+q;
    let txt=""
    $.getJSON(req_url,function (data){
        console.log(data)
        let c=data.main
        let l=data.weather[0]
        let wicon=prefix+l.icon+suffix

        let w = data.wind
        $('#temp').text(c.temp)   
        $('#status').text(l.main)   
        $('#feels').text(c.feels_like)        
        $('#sea').text(c.sea_level)
        $('#grnd').text(c.grnd_level)
        $('#speed').text(w.speed)
        $('#humid').text(c.humidity)
        $('#pressure').text(c.pressure)
        $('#city').text(data.name)
        $('#icon').attr('src',wicon)

    })
   }