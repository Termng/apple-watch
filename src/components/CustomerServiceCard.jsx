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
                <h2>{feedback}</h2>
                <img src={star} alt="star" />
                <p>{rating}</p>
                <h2>{customerName}</h2>
            </div>
        </div>

  )
}



export default CustomerServiceCard