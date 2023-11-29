const WatchCard = ( {imgURL, changeWatchImage, bigWatchImage}) => {

  const handleClick = () => {
    if (bigWatchImage !== imgURL.bigWatch)
    {
      changeWatchImage(imgURL.bigWatch)
    }
  }


  return (
    <div className={`border-2 rounded-xl
      ${bigWatchImage === imgURL.bigWatch
      ? 'border-coral-red'
      : 'border-transparent'
      } cursor-pointer max-sm: flex-1
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-cover">
          <img 
            src={imgURL.thumbnail} 
            alt="Shoe Collection"
            width={127}
            height={103}
            className="object-contain"
            />
        </div>
    </div>
  )
}

export default WatchCard