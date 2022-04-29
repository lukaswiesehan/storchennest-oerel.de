import {SunIcon} from './sun'
import {MoonIcon} from './moon'
import {CloudSunIcon} from './cloud-sun'
import {CloudMoonIcon} from './cloud-moon'
import {CloudIcon} from './cloud'
import {CloudsIcon} from './clouds'
import {CloudRainIcon} from './cloud-rain'
import {CloudSunRainIcon} from './cloud-sun-rain'
import {CloudMoonRainIcon} from './cloud-moon-rain'
import {CloudBoltIcon} from './cloud-bolt'
import {SnowIcon} from './snow'
import {CloudFogIcon} from './cloud-fog'

const iconMap = {
  'clear-sky': {day: {icon: SunIcon, color: 'text-amber-400'}, night: {icon: MoonIcon, color: 'text-sky-900'}},
  'few-clouds': {day: {icon: CloudSunIcon, color: 'text-stone-400'}, night: {icon: CloudMoonIcon, color: 'text-sky-900'}},
  'scattered-clouds': {day: {icon: CloudIcon, color: 'text-stone-400'}, night: {icon: CloudIcon, color: 'text-sky-900'}},
  'broken-clouds': {day: {icon: CloudsIcon, color: 'text-stone-700'}, night: {icon: CloudsIcon, color: 'text-sky-900'}},
  'shower-rain': {day: {icon: CloudRainIcon, color: 'text-sky-700'}, night: {icon: CloudRainIcon, color: 'text-sky-900'}},
  rain: {day: {icon: CloudSunRainIcon, color: 'text-stone-400'}, night: {icon: CloudMoonRainIcon, color: 'text-sky-900'}},
  thunderstorm: {day: {icon: CloudBoltIcon, color: 'text-stone-700'}, night: {icon: CloudBoltIcon, color: 'text-sky-900'}},
  snow: {day: {icon: SnowIcon, color: 'text-sky-300'}, night: {icon: SnowIcon, color: 'text-sky-300'}},
  mist: {day: {icon: CloudFogIcon, color: 'text-stone-400'}, night: {icon: CloudFogIcon, color: 'text-sky-900'}}
}

export const WeatherIcon = ({type, time}: {type: WeatherCondition; time: DayTime}) => {
  const Icon = iconMap[type][time].icon

  return <Icon className={`h-5 fill-current ${iconMap[type][time].color || ''}`} />
}
