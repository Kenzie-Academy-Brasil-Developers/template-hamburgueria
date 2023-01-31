import { useState , useEffect } from 'react'
import { Header } from './componets/Header'
import { Main } from './componets/Main' 
import {api} from "./requests/api"

import React from  'react';
import { ToastContainer, toast } from  'react-toastify' ;
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  
  const [produtos , setProdutos] = useState([])

  useEffect(() => {

  const products = async () =>{

      try {

          const response = await api.get()

          setProdutos(response.data)

      }catch (error){
         
          console.log("ERRO API ")

      }
      
   }
   products()

  } , [])

  const [productsFilter , setProductsFilter] = useState([false])



  const [carrinho , setCarrinho] = useState([])



  return (
    <div className="App">
        
        <Header produtos={produtos} setProductsFilter={setProductsFilter} productsFilter={productsFilter}/>
        
        {

          productsFilter[0] == false ?

          <Main produtos={produtos} carrinho={carrinho} setCarrinho={setCarrinho}/>
          :
          <Main produtos={productsFilter} carrinho={carrinho} setCarrinho={setCarrinho}/>

          

        }
        <ToastContainer />
        
    </div>
  )
}

export default App
