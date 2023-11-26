const WatchCard = ( {imgURL, changeWatchImage, bigWatchImage}) => {

  const handleClick = () => {
    if (bigWatchImage !== imgURL.bigWatch)
    {
      changeWatchImage(imgURL.bigWatch)
    }
  }


  return (
    <div className={`border-2 rounded-xl
      ${bigWatchImage === imgURL
      ? 'border-coral-red'
      : 'border-transparent'
      } cursor-pointer max-sm: flex-1
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center">
          <img 
            src={imgURL.thumbnail} 
            alt=""
            width={127}
            height={103}
            className="object-contain"
            />
        </div>
    </div>
  )
}

export default WatchCard