import {FC} from 'react'
import Image from 'next/image'
import {BreadIcon} from 'icons/bread'
import {SpaceIcon} from 'icons/space'

export const Infos: FC<{className?: string | ''}> = ({className}) => {
  return (
    <div className={`space-y-8 md:space-y-16 ${className}`}>
      <div className="leading-relaxed space-y-3 text-lg">
        <p>
          Das bisher einzige Storchennest in Oerel wurde im Herbst 2019 im Mühlenbruchsweg durch die Anwohner der Straße errichtet. Bereits im
          darauffolgenden Frühjahr zog das Storchenpaar ein, das nun jährlich in dieses Nest zurückkehrt.
        </p>
        <p>
          Im Frühjahr 2022 wurde eine Netzwerkkamera installiert, mithilfe derer wir Ihnen diese Livebilder zur Verfügung stellen können. Wenn sie etwas
          Interessantes beobachten, machen Sie gern einen Screenshot und senden uns diesen per Email zu!
        </p>
        <p>
          <b>Hinweis: </b>
          Wenn das Storchenpaar seine Junge nicht versorgen kann, wird evtl. eines abgestoßen. Das ist ein natürlicher Prozess, der nicht z.B. durch
          Zufüttern der Junge gestört werden sollte.
        </p>
      </div>
      <div className="flex items-center space-x-8 text-red-700 font-semibold">
        <div className="flex items-center space-x-2">
          <BreadIcon className="h-5 fill-current text-red-300" />
          <span>Nicht zufüttern!</span>
        </div>
        <div className="flex items-center space-x-2">
          <SpaceIcon className="h-5 fill-current text-red-300" />
          <span>Nicht dem Nest nähern!</span>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="w-24">
          <Image src="/images/logo-nabu.png" alt="Nabu Logo" width="709" height="451" placeholder="blur" blurDataURL="/images/logo-nabu.png" />
        </div>
        <p className="max-w-xs">Dieses Projekt wurde unterstützt vom NABU Kreisverband Bremervörder-Zeven.</p>
      </div>
    </div>
  )
}
