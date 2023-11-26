import { watchbanner } from "../assets/images"
import { watch4 } from "../assets/images"


const Hero = () => {
  return (

    <div className="hero-flex">
      <div className="left">
        <div className="left-title">
          <h2 className="font-montserrat text-lg"> AI CHARACTER FORCE ⌚️</h2>
          <h2 className="hero-font font-semibold">Refurbished Apple Watches </h2>
        </div>

        <div className="hero-sub">
          <div className="img-cont">
            <img src={watch4} alt="dis" />
          </div>
          <div className="hero-sub-text" >
            <h3>THIS IS A HEADER</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere commodi ex enim. teye iwuw ywyw ywyw</p>
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