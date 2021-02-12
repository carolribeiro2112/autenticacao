import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Products = () => {
  
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token")
  
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(()=>{
    axios.get(' http://localhost:4000/products', {headers:headers})
      .then(response => setProducts(response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      {
        !token &&
        <Redirect to="/"/>
      }
      {
        products !== undefined &&
        products.map((item:any)=>(
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} alt=""/>
            <h3>{item.description}</h3>
            <p>{item.price}</p>
          </div>
        ))
      }
      {token===null && <Redirect to="/"/>}
    </>
  )
}

export default Products;