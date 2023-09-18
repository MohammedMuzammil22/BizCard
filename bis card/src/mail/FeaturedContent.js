import React from 'react'
import AddMedia from "./AddMedia"

const FeaturedContent = ({orderOfrender,setFContent,id}) => {

  const handleAddMedia=()=>{
    const addPos = {position:orderOfrender.length,type:"AddMedia"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleAddMedia");
    console.log(orderOfrender);

  }

  const handleEmbededMedia=()=>{
    const addPos = {position:orderOfrender.length,type:"EmbededMedia"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleEmbededMedia");
    console.log(orderOfrender);


  }

  const handleAddProduct=()=>{
    const addPos = {position:orderOfrender.length,type:"AddProduct"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleAddProduct");
    console.log(orderOfrender);


  }

  const handleAddText=()=>{
    const addPos = {position:orderOfrender.length,type:"AddText"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleAddText");
    console.log(orderOfrender);
    console.log("orderOfrender length " +orderOfrender.length);


  }


  return (
    <div className=' bg-slate-700'>
        <input type="text" value={'Section Title'} className='w-[85%] bg-slate-700 m-2'/>
        <hr className='m-2'/>

        <div>
          {/* {orderOfrender.length!=0 && orderOfrender.map((inputComp)=>(inputComp.type=="AddMedia")?(<AddMedia/>):9)} */}
          {/* {(orderOfrender.length!=0)?  (orderOfrender.map((inputComp)=>(inputComp.type=="AddMedia")?(<AddMedia/>):9) ):null} */}

          {/* {orderOfrender.map((inputComp)=>(inputComp.type=="AddMedia")?(inputComp.type):"errorrrrrrrrrrr.........")} */}
          {/* {orderOfrender.map((inputComp) => inputComp.type === "AddMedia" ? (
  null
) : <AddMedia key={inputComp.position} />)} */}
{/* {console.log(orderOfrender[orderOfrender.length].type)} */}



        </div>
        {console.log("orderOfrender length "+ (orderOfrender.length))}

        
        <div className=' flex justify-between'>
            <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddMedia}>Add media</button>
            <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleEmbededMedia}>embeded media</button>
        </div>
        <div className=' flex justify-between'>
            <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddProduct}>Add product</button>
            <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddText}>Add text</button>
        </div>
    </div>
  )
}

export default FeaturedContent