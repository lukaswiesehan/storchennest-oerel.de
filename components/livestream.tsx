export const LiveStream = ({className}: {className: string}) => {
  const videoId = 'rlKo_etTSpM'

  return (
    <div className={`p-2 bg-white rounded-2xl shadow-xl shadow-stone-500/10 ${className}`}>
      <div className="w-full aspect-video overflow-hidden rounded-lg">
        {/* <div className="w-full h-full flex items-center justify-center bg-stone-800 p-8 text-center">
          Der Livestream wird im Mai 2022 zur Verfügung stehen.
        </div> */}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title="Livestream Storchennest"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
