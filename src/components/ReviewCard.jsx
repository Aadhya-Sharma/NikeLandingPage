import { star } from "../nike_landing_assets/assets/icons"
const ReviewCard = ({imgURL, customerName,rating,feedback,}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="font-palanquin text-lg p-2 text-slate-gray" >{feedback}</p>
        <div>
            <img src={star} width={24} height={24} className="object-contain m-1" />
            <p className="text-slate-gray">({rating})</p>
        </div>
        <h3 className="font-montserrat font-bold text-lg pt-2" >{customerName}</h3>
    </div>
  )
}

export default ReviewCard