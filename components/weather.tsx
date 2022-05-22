import useSWR from 'swr'
import {fetcher} from '@lib/fetcher'
import {WeatherIcon} from 'icons/weather'
import {TemperatureIcon} from 'icons/temperature'
import {WindIcon} from 'icons/wind'

export const Weather = ({className}: {className: string}) => {
  const {data, error} = useSWR<WeatherData>('/api/weather', fetcher)

  return (
    <div className={`md:pb-8 xl:pb-16 max-w-sm sm:max-w-md md:max-w-full ${className}`}>
      <h3 className="font-display text-stone-800 text-xl border-b border-stone-300 pb-4 mb-4">Aktuelles Wetter am Storchennest</h3>
      {error ? (
        <div>ERROR</div>
      ) : data ? (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between sm:space-x-8 md:flex-col md:space-x-0 md:space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6">
              <WeatherIcon {...data.icon} />
            </div>
            <span>{data.description}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6">
              <TemperatureIcon className={`h-5 fill-current ${data.temperature > 20 ? 'text-orange-400' : 'text-sky-400'}`} />
            </div>
            <span>{`${data.temperature.toFixed(1).replace('.', ',')} °C`}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6">
              <WindIcon className="h-5 fill-current text-stone-400" />
            </div>
            <span>{`${data.wind.speed.toFixed(0)} km/h aus ${data.wind.direction}`}</span>
          </div>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  )
}
