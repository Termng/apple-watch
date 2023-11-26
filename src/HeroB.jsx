import { arrowRight } from "./assets/icons"
import { watch13 } from "./assets/images"
import Button from "./components/Button"
import { statistics, products, watches } from "./constants"
import WatchCard from "./components/WatchCard"

const HeroB = () => {
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >

        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 gap-5">

            <p className="text-xl ">Our Bespoke Collection</p>
            <h1 className="text-[70px] leading-[5.4rem] max-sm:text-[40px] max-sm:leading-[3rem] font-semibold"><span>Get the best deals on</span>
            <br /> 
            <span className="bg-black text-white px-2 rounded-md">Apple Watches</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis perferendis eligendi.</p>
            <Button label ='Shop Now' IconURL = {arrowRight} />

           <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
             {statistics.map((stat) =>  
              (
                <div key={stat.label}> 
                  <p>{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              )
             )}

           </div>


        </div>

      <div className="relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center" >
        <img 
        className="relative object-contain z-10 " 
        width = {610} 
        height ={500} 
        src={watch13} 
        alt="side-image" />

        <div>
          {watches.map((watch) => 
          (
            <div key={watch}>
              <WatchCard
              imgURL = {watch}
              changeWatchImage = {() => {}}
              bigWatchImage = ""
              />

            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default HeroB