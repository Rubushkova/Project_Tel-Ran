import React from "react";
import s from "./index.module.css";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction } from '../../store/reducers/favoriteReducer';
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  image,
  title,
  price,
  discont_price,
}) {
  const favoriteState = useSelector(store => store.favoriteProducts);
  const isFavorite = favoriteState.find(el => el.id === id)

  const dispatch = useDispatch();

  const heartStyles = {
   fill : isFavorite ? '#92A134' : '',
   stroke: isFavorite ? '#92A134' : ''
  }

  return (
    <div className={s.card} >
      <Link to={`/product/${id}`}>
      <img src={image} alt={title}/>
      </Link>      
      <div>
        <FiHeart onClick={() => dispatch(addToFavoriteAction({  id, image, title, price, discont_price}))} style={heartStyles}/>
        <HiOutlineShoppingBag />
      </div>

      <div>
        <p>{title}</p>
        <div>
          <p>${price}</p>
          <span>${discont_price}</span>
        </div> 
      </div>             

    </div>
  );
}


// import React from "react";
// import s from "../ProductCard/index.module.css";
// import { FiHeart } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { Link } from "react-router-dom";

// export default function ProductCard({
//   id,
//   image,
//   title,
//   price,
//   discont_price,
// }) {
//   return (
//     <Link to={`/products/${id}`}>     
//     <div className={s.card}>
//       <img src={image} alt={title} />
//       <div>
//         <FiHeart />
//         <HiOutlineShoppingBag />
//       </div>
//             <div>
//             <p>{title}</p>
//             <div>
//               <p>${price}</p>
//               <span>${discont_price}</span>
//             </div>
//           </div>
//         </div> 
//       </Link>        
//       );
//     }