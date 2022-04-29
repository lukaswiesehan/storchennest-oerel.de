import Image from 'next/image'

export const Map = () => {
  return (
    <div className="absolute -top-24 -inset-x-32 md:inset-x-0 lg:-right-48 2xl:right-0 lg:left-auto lg:w-full max-w-screen-lg">
      <Image src="/images/map.png" width="1873" height="1287" placeholder="blur" blurDataURL="/images/map.png" alt="Lagekarte Storchennest Oerel" />
    </div>
  )
}
