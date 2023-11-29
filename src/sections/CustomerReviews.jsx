import { reviews } from "../constants"
import CustomerServiceCard from "../components/CustomerServiceCard"
const CustomerReviews = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      
    <div className = 'Flex items-center max-w-[900px]'>
      <h2 className = 'font-bold text-4xl py-8'>What Our <span className='text-coral-red ' >Customers</span> Say?</h2>
      <p className = 'text-slate-gray font-regular text-1xl'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
    </div>
    
    <div className="flex gap-24 justify-center flex-wrap">
      {reviews.map((review) => (
        <CustomerServiceCard key={review.CustomerName}
      
        {...review}/>
      ))}
    </div>
    </div>

  )
}

export default CustomerReviews