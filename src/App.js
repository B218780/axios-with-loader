import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Loader from './components/Loader';

const App = () => {
  let isLoading = true;

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getRequest = async ()=>{
    try{
      setLoader(true)
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    }
    catch(error){
      console.log(error.message)
    }
    finally {
      setLoader(false); // Set loading state to false after request completes
    }
  }

  useEffect(()=>{
    getRequest()
  },[])

  return (
    <>
    {
      loader == true ? <div className='w-full min-h-screen relative '><Loader  /></div> :
      <div className='w-4/5 mx-auto flex flex-col gap-5'>
        <h1 className='text-3xl w-full bg-red-500 text-white'>Displaying title by fakestore Api</h1>
        <div className=' grid grid-cols-3 gap-8'>
          {
            data.map((item)=>{
              return (
                <>
                  <div className='shadow-lg p-4'>
                    <h1>{item.title}</h1>
                  </div> 
                </>
              )
            })
          }
        </div>
      </div> 
    }
    </>
  )
}

export default App