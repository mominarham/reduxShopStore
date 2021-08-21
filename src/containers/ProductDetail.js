import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import {selectedProducts} from '../redux/actions/productActions'

function ProductDetail() {
    const product = useSelector((state)=>state.product)
    const dispatch = useDispatch()

    console.log('ye prdocu ha', product)
    const {productId} = useParams()

    const fetchProductDetail = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{console.log(err)})
        dispatch(selectedProducts(response.data))
    }
    useEffect(()=>{
        if(productId && productId !== '') fetchProductDetail()
    },[productId])

    return (
        <div>
            <img src={product.image} />
         <h5> title: { product.title}</h5>
         <h6> price: { product.price}</h6>
        </div>
    )
}

export default ProductDetail
