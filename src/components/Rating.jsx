import { FaStar , FaStarHalf } from "react-icons/fa";

const Rating = ({num , className}) => {
  const rating = [];
  if(num==4.5){
    for (let i=0; i<4; i++){
      rating.push(<FaStar key={i} color="#DDBE63"/>);
    }
    rating.push(<FaStarHalf color="#DDBE63" />);
  }else{
    for (let i=0 ; i<num; i++){
      rating.push(<FaStar key={i} color="#DDBE63" />);
    }
  }

  return (
    <div className={`flex items-center ${className || ''}`}>
      {rating}
    </div>
  )
}

export default Rating;