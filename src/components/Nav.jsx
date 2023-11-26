import { appleLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"


const Nav = () => {
  return (
    <header className="padding-x py-8  z-10 w-full " >
        <nav className=" flex justify-between items-center max-container gap-9">
            <a href="/">
                <img 
                src= { appleLogo } 
                alt="logo"
                width={130} 
                height={29}/>
            </a>

            <ul className="flex-1 flex justify-center items-center gap-6 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                  href={item.href}
                  className="font-montserrat leading-normal text-slate-gray text-lg px-5"
                  > {item.label}</a>
                </li>
              ))} 
                
            </ul>

            <div className="hidden max-lg:block">
              <img 
              src={hamburger} 
              alt="hamburger" 
              width={25}
              height={25}/>
            </div>
            
            <button
            className="text-lg font-montserrat bg-black p-4 mr-4 text-white font-medium rounded-md mx-3 max-lg:hidden" 
            >Sign in</button>

          
        </nav>
    </header>
  )
}

export default Nav