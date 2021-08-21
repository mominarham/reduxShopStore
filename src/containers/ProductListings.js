import React,{useEffect} from 'react'
import ProductComponents from './ProductComponents'
import {useSelector,useDispatch} from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
function ProductListings() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()

    const fetchProduct = async()=>{
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err=>{console.log('ye error hai',err)})
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProduct()
    },[])
    console.log('ye product h', products)
    return (
        <div>
            <ProductComponents/>
        </div>
    )
}

export default ProductListings
