import React, { useEffect } from 'react'
import AllProductsContainer from '../../components/AllProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products';

export default function AllProductsPage() {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllProducts())
    }, [dispatch]);
  
 
    const allProductsState = useSelector(store => store.products)

  return (
    <div>
        <AllProductsContainer products={allProductsState}/>
    </div>
  )
}
