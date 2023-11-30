const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">

      <h3 className="text-4xl leading[68px] lg:max-w-md font-bold">Sign Up for <span className="text-coral-red">Updates </span>& Newsletter</h3>

  <div className="lg:max-w-[40%] w-full flex items center max-sm:flex-col gap-5 p-3 sm:border sm:border-slate-gray rounded-full">
    
          <input type="text"
          placeholder="torahfelix@gmail.com"
          className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
          
          <button className="bg-black p-4 text-white rounded-full text-lg px-8">Sign Up</button>
         
          
          </div>
  </div>

      



    </section>
  )
}

export default Subscribe