import { watchbanner } from "../assets/images"
import { watch26 } from "../assets/images"


const Hero = () => {
  return (

    <div className="hero-flex">
      <div className="left">
        <div className="left-title">
          <h2 className="hero-font font-semibold">Refurbished Apple Watches </h2>
        </div>

        <div className="hero-sub">
          <div className="img-cont">
            <img src={watch26} alt="dis" />
          </div>
          <div className="hero-sub-text" >
            <h3 className="font-medium text-2xl text-slate-gray ">Rejuvenated Apple Watches: Like-New, Unbeatable Prices</h3>
            <p>Reimagine Technology with Our Range of Rejuvenated Apple Watches: Effortless Style and Unmatched Savings.</p>
          </div>
        </div>
        <div>
        </div>
      </div>





      <div className="red-bg">
        <img
        className="img-fit"
        src={watchbanner} alt="" />
      </div>
    </div>
  )
}

export default Hero