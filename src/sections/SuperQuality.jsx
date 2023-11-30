import Button from "../components/Button"
import { watch18 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div 
    id="about-us"
    className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container flex-wrap"
    >
      <div className="flex flex-1 flex-col items-start">
          <h3 className="font-palanquin capitalize text-4xl max-sm:text-[36px] max-sm:leading-[42px] font-bold lg:max-w-lg">We Provide You Super Quality Shoes</h3>
          <p className="info-text mt-4 lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          </p>
          <div className="mt-11">
            <Button label='View Details'/>
          </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
          <img 
          src={watch18} 
          width={570}
          height={520}
          className="object-contain"
          alt="" />
      </div>



    </div>
  )
}

export default SuperQuality