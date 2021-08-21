import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function ProductComponents() {
    const products = useSelector((state)=>state.allProducts.products)

    // const {title,category} = products[0]
    return (
        <div>
            {
                products.map((prod)=>{
                    return(
                        <>  <Link to ={`/product/${prod.id}`} >
                            <div style={{'width': '400px',"display":'flex',"flexDirection":"column","border":'2px solid black', "margin":'10px'}} >  
                                 <img style={{'width':"60px"}} src={prod.image} alt='no image' />
                                <h6> title :{prod.title} </h6>
                                <h6>price :{prod.price} </h6>
                                <h6> category :{prod.category} </h6>
                            {/* <h6>{prod.title} </h6> */}
                            </div>
                        </Link>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductComponents
