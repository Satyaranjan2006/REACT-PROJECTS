
import { useState, useEffect } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

export default function ImageSlider({ url, page = 1, limit = 5 }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)


    async function fetchImages(geturl) {
        try {

            setLoading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                //after getting the data
                setImages(data)
                //if we gwt the data
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.mesage)
            //for any error
            setLoading(false)

        }
    }

    function handlePrevious() {
        //by clicking on left arrow we go to previous
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)


    }, [url])

    console.log(images);
    //if it is loading
    if (loading) {
        return <div>Loading ! Please Wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error Occured {errorMsg}</div>
    }









    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {
            images && images.length ?
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={currentSlide === index
                            ? "current-image"
                            : "current-image hide-current-image"}
                    />
                ))
                : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => <button
                        key={index}
                        className={currentSlide === index ? "current-indicator" : "current-indicator  update-current-indicator"}
                        onClick={() => setCurrentSlide(index)}
                    ></button>)
                    : null
            }
        </span>

    </div>
}