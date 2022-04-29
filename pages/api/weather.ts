const iconMap = {
  '01d': {type: 'clear-sky', time: 'day'},
  '01n': {type: 'clear-sky', time: 'night'},
  '02d': {type: 'few-clouds', time: 'day'},
  '02n': {type: 'few-clouds', time: 'night'},
  '03d': {type: 'scattered-clouds', time: 'day'},
  '03n': {type: 'scattered-clouds', time: 'night'},
  '04d': {type: 'broken-clouds', time: 'day'},
  '04n': {type: 'broken-clouds', time: 'night'},
  '09d': {type: 'shower-rain', time: 'day'},
  '09n': {type: 'shower-rain', time: 'night'},
  '10d': {type: 'rain', time: 'day'},
  '10n': {type: 'rain', time: 'night'},
  '11d': {type: 'thunderstorm', time: 'day'},
  '11n': {type: 'thunderstorm', time: 'night'},
  '13d': {type: 'snow', time: 'day'},
  '13n': {type: 'snow', time: 'night'},
  '50d': {type: 'mist', time: 'day'},
  '50n': {type: 'mist', time: 'night'}
}

export const Weather = async (req, res) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=53.480951&lon=9.062270&appid=${process.env.WEATHER_API_KEY}&lang=de`)
    const data = await response.json()

    let dir = ''
    if (data.wind.deg > 337.5 || data.wind.deg <= 22.5) dir = 'N'
    else if (data.wind.deg > 22.5 && data.wind.deg <= 67.5) dir = 'NO'
    else if (data.wind.deg > 67.5 && data.wind.deg <= 112.5) dir = 'O'
    else if (data.wind.deg > 112.5 && data.wind.deg <= 177.5) dir = 'SO'
    else if (data.wind.deg > 177.5 && data.wind.deg <= 202.5) dir = 'S'
    else if (data.wind.deg > 202.5 && data.wind.deg <= 247.5) dir = 'SW'
    else if (data.wind.deg > 247.5 && data.wind.deg <= 292.5) dir = 'W'
    else dir = 'NW'

    const weather = {
      icon: iconMap[data.weather[0].icon],
      description: data.weather[0].description,
      temperature: data.main.temp - 273.15,
      wind: {
        speed: data.wind.speed * 3.6,
        direction: dir
      }
    }

    res.status(200).json(weather)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
}

export default Weather
