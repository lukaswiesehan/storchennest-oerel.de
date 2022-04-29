import {useRouter} from 'next/router'
import {Container} from '@components/container'
import {Map} from '@components/map'
import {Navigation} from '@components/navigation'
import {Footer} from '@components/footer'
import {LiveStream} from '@components/livestream'
import {Weather} from '@components/weather'
import {Infos} from '@components/infos'
import {Table} from '@components/table'
import {EnvelopeIcon} from 'icons/envelope'

export default function Home() {
  const router = useRouter()

  return (
    <Container>
      <Map />
      <div className="relative">
        <Navigation />
        <main className="w-full max-w-screen-xl mx-auto p-4 sm:p-8 mt-32 lg:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-8 2xl:gap-x-16">
            <LiveStream className="col-span-2" />
            <Weather className="flex flex-col justify-end" />
          </div>
          <div className="mt-16 md:mt-24 space-y-8">
            <h1 className="font-display text-stone-800 text-2xl">Das Storchennest im Mühlenbruchsweg</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Infos className="order-2 lg:order-1" />
              <div className="order-1 lg:order-2">
                <Table />
              </div>
            </div>
          </div>
          <div className="md:hidden space-y-4 mt-16">
            <p>Anregungen oder Fehler?</p>
            <button
              onClick={() => router.push('mailto:info@storchennest-oerel.de')}
              className="flex items-center space-x-3 font-semibold text-lime-800 bg-[#C1E58A] rounded-md py-1.5 px-4"
            >
              <EnvelopeIcon className="w-5 fill-current text-lime-600" />
              <span>Email schreiben</span>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </Container>
  )
}
