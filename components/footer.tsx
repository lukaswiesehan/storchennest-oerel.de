import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-stone-200 mt-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 py-16 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-end text-sm">
        <p>&copy; Jonte Riggers & Lukas Wiesehan 2022</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="https://lukaswiesehan.de/legal"><a target="_blank" rel="noreferrer">Impressum</a></Link>
          </li>
          <li>
            <Link href="https://lukaswiesehan.de/privacy"><a target="_blank" rel="noreferrer">Datenschutz</a></Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
