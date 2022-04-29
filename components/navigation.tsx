import Image from 'next/image'
import {useRouter} from 'next/router'
import {EnvelopeIcon} from 'icons/envelope'

export const Navigation = () => {
  const router = useRouter()

  return (
    <div className="w-full">
      <nav className="w-full max-w-screen-xl mx-auto p-4 sm:p-8 flex justify-between items-end">
        <div className="w-56">
          <Image src="/images/logo.png" width="572" height="203" placeholder="blur" blurDataURL="/images/logo.png" alt="Storchennest Oerel" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <p>Anregungen oder Fehler?</p>
          <button
            onClick={() => router.push('mailto:info@storchennest-oerel.de')}
            className="flex items-center space-x-3 font-semibold text-lime-800 bg-[#C1E58A] rounded-md py-1.5 px-4"
          >
            <EnvelopeIcon className="w-5 fill-current text-lime-600" />
            <span>Email schreiben</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
