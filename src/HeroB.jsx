import { arrowRight} from "./assets/icons"
import { watch27,} from "./assets/images"
import { useState} from "react"
import Button from "./components/Button"
import { statistics, products, watches } from "./constants"
import WatchCard from "./components/WatchCard"

const HeroB = () => {
  const [bigWatchImg, setbigWatchImg] = useState (watch27)

  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col gap-2 sm:gap-20 justify-center pt-24"
    >

        <div className="relative xl:w-2/5 flex flex-col items-start w-full max-xl:padding-x  gap-5">

            <p className="text-xl ">Our Bespoke Collection</p>
            <h1 className="text-[70px] leading-[5.4rem] max-sm:text-[40px] max-sm:leading-[3rem] font-semibold"><span>Get the best deals on</span>
            <br /> 
            <span className="bg-black text-white px-2 rounded-md">Apple Watches</span>
            </h1>
            <p>Embrace Smart Savings: Your Source for Incredible Deals on Apple Watches</p>
            <Button label ='Shop Now' IconURL = {arrowRight} />

           <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
             {statistics.map((stat) =>  
              (
                <div key={stat.label}> 
                  <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              )
             )}

           </div>


        </div>

      <div className="relative justify-center items-center  max-xl:py-20 bg-primary bg-hero  bg-cover bg-center" >
        <img 
        className="relative object-contain z-10 " 
        width = {510} 
        height ={500} 
        src={bigWatchImg} 
        alt="side-image" />

        <div className="flex pt-14 sm:gap-6 gap-4 max-sm:px-6">
          {watches.map((watch) => 
          (
            <div key={watch}>
              <WatchCard
              imgURL = {watch}
              changeWatchImage = {(watch) => setbigWatchImg(watch)}
              bigWatchImage = {bigWatchImg}
              />

            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default HeroB