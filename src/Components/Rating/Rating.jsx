import { faStarHalfStroke, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Rating({rate}) {
    function getStarIcon(position){
    if (rate>= position){
        return solidStar
    }
    if(rate>= position-0.5){
        return faStarHalfStroke
    }else {
        return regularStar
    }
    }
  return (
    <>
    {
    [1,2,3,4,5].map((position)=> <FontAwesomeIcon key={position} className="text-yellow-400" icon={getStarIcon(position)}/> )
}



      {/* <FontAwesomeIcon className="text-yellow-400" icon={solidStar} />
      <FontAwesomeIcon className="text-yellow-400" icon={faStarHalfStroke} /> */}

    </>
  );
}
