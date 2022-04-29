type WeatherData = {
  icon: {type: WeatherCondition; time: DayTime}
  description: string
  temperature: number
  wind: {speed: number; direction: string}
}
