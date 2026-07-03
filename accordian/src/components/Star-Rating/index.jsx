
import { FaStar } from 'react-icons/fa'
import { useState } from 'react';
import'./style.css'

export default function StarRating({noOfStars = 5}) {

    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(0)

    function handelClick(getCurrentIndex) {
        setrating(getCurrentIndex)


    }
    function mouseEnter(getCurrentIndex) {
       sethover(getCurrentIndex)

    }
    function mouseMove(getCurrentIndex) {
        sethover(rating)

    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar
                            // why this key
                            key={index}
                            className={index<=(hover||rating) ? 'active':'inactive'}
                            onClick={() => handelClick(index)}
                            onMouseMove={() => mouseEnter(index)}
                            onMouseLeave={() => mouseMove(index)}
                            size={40}
                        />
                    );
                })
            }

        </div>
    )
}