import { useEffect, useState } from "react"
import './style.css';

export default function LoadMoreData(){


    const [loading, setLoading] = useState(false)
    const [products, setproducts] = useState([])
    const [count, setCount] = useState(0)
    const [disable, setdisable] = useState(false)
    
    async function fetchData(){
        try {
            setLoading(true)
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0? 0: count*20}`)



            const result=await response.json();
            if(result &&result.products && result.products.length){
                setproducts((prevData)=>[...prevData,...result.products])
                setLoading(false)
            }


            console.log(result);
            
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }
    }

    useEffect(() => {
      fetchData()
    
      
    }, [count])

    useEffect(() => {
     if(products && products.length ===100) setdisable(true)
    
      
    }, [products])
    

    if(loading){
        return <div>loading data ! Please wait.</div>
    }
    

    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length
                ?  products.map((item)=>(
                     <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.title}</p>

                     </div>
                ))
                :null
            }
        </div>
        <div className="button-container">
            <button disabled={disable} onClick={()=>setCount(count+1)}>Load More Products</button>

            {
                disable? <p>you have reach to enough products</p>: null
            }
        </div>
    </div>
}