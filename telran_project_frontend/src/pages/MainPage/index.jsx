import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import CategoriesContainer from '../../components/CategoriesContainer'
import DiscountForm from '../../components/DiscountForm'
import ProductsSaleContainer from '../../components/ProductsSalesContainer'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../requests/products'
import { getAllCategories } from '../../requests/categories'

export default function MainPage() {

    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getAllProducts(), [])
    dispatch(getAllCategories(), [])
    })
  return (
    <div>
    
     <CategoriesContainer/>
      <DiscountForm />
      <ProductsSaleContainer />
    <Footer/>
    </div>
  )
}
