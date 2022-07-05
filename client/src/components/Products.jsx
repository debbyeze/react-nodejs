import {useState, useEffect} from "react";
import Axios from "axios";

function Products() {
    const [listProducts, setlistProducts] = useState([]);
 
   useEffect(() => {
     Axios.get("http://localhost:5000/api/products")
     .then((response) =>{
       setlistProducts(response.data);
     });
   }, []);
   
   return (
     <div className="App">
       {listProducts.map((product)=>{
         return(
           <div className="container">
             <img src={product.image} alt="pic" />
             <h4>{product.name}</h4>
             
       </div>
         )
       })}
     </div>
   );
 }
 
export default Products;