import React, { useState, useEffect } from 'react';
import apiProduct from './api/productsApiHttp';
import apiCategory from './api/categoryApiHttp';
import apiAbout from './api/aboutApiHttp';

import Routers from './routers';




function App() {
   //danh sách sẩn phẩm
  const [products, setProduct] = useState([]);
  //danh sách danh mục
  const[category,setCategory] = useState([]);

  const[about,setAbout]= useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await apiProduct.getAll();
        setProduct(data)
      } catch (error) {
        console.log('Faile to request API', error)
      }
    }
    getProduct()
  }, [])


  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await apiCategory.getAll();
        console.log(data)
        setCategory(data)
      } catch (error) {
        console.log('Faile to request API', error)
      }
    }
    getCategory()
  }, [])

  useEffect(() => {
    const getAbout = async () => {
      try {
        const { data } = await apiAbout.getAll();
        console.log(data)
        setAbout(data)
      } catch (error) {
        console.log('Faile to request API', error)
      }
    }
    getAbout()
  }, [])




  const onHandleRemove = async (id) => {

    try {
      await apiProduct.removeProduct(id)
      const newProducts = products.filter(product => (product.id != id));
      setProduct(newProducts);
    } catch (error) {

    }

  }
  const onHandleAdd = async (product) => {
     
   try {
     const {data} = await apiProduct.createProduct(product);
     setProduct([...products, product])
   } catch (error) {
     
   }
  }

  const onHandUpdate= async (id,product)=>{

    try {
      const{data}= await apiProduct.updateProduct(id,product);
      const newProducts = products.map(product=>(
        product.id==data.id ? data:product
        
      ))
      setProduct(newProducts)
    } catch (error) {
      console.log('Faile to request API', error)
    }
  }

  // const onHandUpdate= async (id,category)=>{

  //   try {
  //     const{data}= await apiCategory.updateCategory(id,category);
  //     const newCategory = products.map(category=>(
  //       category.id==data.id ? data:category
        
  //     ))
  //     setProduct(newCategory)
  //   } catch (error) {
  //     console.log('Faile to request API', error)
  //   }
  // }

  return (
    <section id="container">
      <Routers products={products}  category={category}  about={about} onRemove={onHandleRemove}  onAdd={onHandleAdd}  onEdit={onHandUpdate}/>
     

    </section>

  );
}

export default App;
