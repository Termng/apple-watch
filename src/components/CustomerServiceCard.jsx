import { star } from "../assets/icons"

const CustomerServiceCard = ({imgURL, customerName, rating, feedback}) => {
  return (
   
        <div className="flex flex-col gap-12 items-center" >
            <div className="w-40 h-40">
                <img
                className="w-40 h-40 object-cover rounded-full "
                src={imgURL}
                alt={customerName}
                />
            </div>
            <div className="max-w-[400px] flex flex-col items-center">
                <h2 className="text-slate-gray text-lg leading-7">{feedback}</h2>
                <div className="flex items-center flex-1 gap-4">
                    <img src={star} alt="star" />
                    <p className="text-2xl font-normal ">{rating}</p>
                </div>
                <h3 className="mt-4 text-2xl text-slate-gray font-semibold">{customerName}</h3>
            </div>
        </div>

  )
}



export default CustomerServiceCard