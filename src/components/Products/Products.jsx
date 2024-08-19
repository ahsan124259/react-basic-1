import { useEffect } from "react";
import { useState } from "react";
import ShowProducts from "../ShowProducts/ShowProducts";
import './products.css'


const Products = () => {
    const[photos,setPhotos]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])
    return (
        <div>
            
            <div className="products-container">
            {
                photos.map(photo=><ShowProducts
                     key={photo.id}
                     photo={photo}
                     
                     
                     ></ShowProducts>)
            }
            </div>

        </div>
    );
};

export default Products;