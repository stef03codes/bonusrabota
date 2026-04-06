import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

interface ReviewProps {
    user: string;
    description: string;
    rating: number;
}

export default function Review({user, description, rating}: ReviewProps) {
    return (
        <div className='border rounded-md p-3 mt-3'>
            <h3 className='font-bold'>{user}</h3>
            <p>{description}</p>
            <div className='text-yellow-400'>
                {(() => {
                    const stars = [];
                    for (let i = 0; i < rating; i++) {
                        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
                    }
                    return stars;
                })()}
            </div>
        </div>
    )
}