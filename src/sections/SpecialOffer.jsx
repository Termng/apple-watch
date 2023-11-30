import { watchbanner5 } from "../assets/images"


const SpecialOffer = () => {
  return (
    <div className="div-image">
      <img 
      src={watchbanner5} 
      className="bg-image"
      alt="full watch" />

       <div class="overlay">
        
       <div  className="inside-text">
       </div>
       <div className="text-inside">
         <h2 className=" sm:text-4xl mb-4 font-normal text-2xl">Become a Beta Tester for our new Apple Watch Products</h2>

         <button className="cursor-pointer bg-white text-black p-4 px-10 font-medium rounded-full mt-4"> <a className="cursor-pointer" href="">Sign Up Here</a></button>
       </div>





       </div>





    </div>
  )
}

export default SpecialOffer