import { footerLinks, socialMedia } from "../constants"
import { footerLogo} from "../assets/images"
import FooterCard from "../components/FooterCard"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="text-white flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
            src={footerLogo} 
            alt="Footer Logo"
            width={150}
            height={46}
            className="footerLogo"

            />
            
          </a>
          <p className="mt-6 text-white text-base leading-7 sm:max-w-sm "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime veniam delectus a similique blanditiis quo necessitatibus eos consectetur distinctio repudiandae?</p>
          <div className="flex items-center gap-5 mt-8">
          {socialMedia.map ((icon) => (
            <div className="flex justify-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src} 
              alt={icon.alt}
              height={24}
              width={24}
              
              />
              
            </div>
          ))}

          </div>

        </div>
        
        
        <div className="flex flex1 justify-between lg:gap-40 gap-20 flex-wrap">

          {footerLinks.map((footlink) => (
            <div key={footlink.title}>
              <h4 className="text-2xl font-bold ">{footlink.title}</h4>
              <ul>
                {footlink.links.map((link) => (
                  <li className="font-thin mt-3 text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                  <a>{link.name}</a>
                  </li>
                ))}
              </ul>

            </div>
          ))}


        </div>
      </div>

      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex1 justify-start items-center gap-2 cursor-pointer">
          <img src={copyrightSign} alt="Copyright" width={20} height={20} 
          className="rounded-full"
          />
          <p>Copyright. All rights reserved</p>

        </div>
        <p className="cursor-pointer"> Terms & Conditions</p>

      </div>

    </footer>
  )
}

export default Footer