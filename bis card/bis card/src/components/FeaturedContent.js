// import React from 'react'

// const FeaturedContent = ({orderOfrender}) => {
//   return (
//     <div className=' bg-slate-700'>
//         <input type="text" value={'Section Title'} className='w-[85%] bg-slate-700 m-2'/>
//         <hr className='m-2'/>
 
//         <div>
//           {/* {orderOfrender.length} */}
//         </div>
        
//         <div className=' flex justify-between'>
//             <button className='rounded-sm w-[50%] m-2 bg-slate-500'>Add media</button>
//             <button className='rounded-sm w-[50%] m-2 bg-slate-500'>embeded media</button>
//         </div>
//         <div className=' flex justify-between'>
//             <button className='rounded-sm w-[50%] m-2 bg-slate-500'>Add product</button>
//             <button className='rounded-sm w-[50%] m-2 bg-slate-500'>embeded text</button>
//         </div>
//     </div>
//   )
// }

// export default FeaturedContent

import React from 'react'
import AddMedia from "./AddMedia"
import { useState } from 'react'
import ActionInput from '../ActionInput';

const FeaturedContent = ({comp,orderOfrender,setFContent,id,fContent,content}) => {

  const [orderOfInput, setOrderOfInput] = useState([]); 



  // const [comp,setComp]=useState({media:<input type="text" value={"media"} />,embededMedia:<input type="text" value={"embededmedia"} />,product:<input type="text" value={"product"} />,text:<input type="text" value={"text"} />});
  const handleAddMedia=()=>{
    const addPos = {position:orderOfrender.length,type:"addMedia"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleAddMedia");
    // console.log(orderOfrender);
    // setFContent(...fContent)
    content.position = orderOfrender
    content.position.map((e)=>{console.log(e)})
    updatedFContent(id)
    setOrderOfInput([...orderOfInput, <input type="text" value={"media"} />]);



  }

  const handleEmbededMedia=()=>{
    const addPos = {position:orderOfrender.length,type:"embededMedia"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleEmbededMedia");
    // console.log(orderOfrender);
    content.position = orderOfrender
    content.position.map((e)=>{console.log(e)})
    updatedFContent(id)
    setOrderOfInput([...orderOfInput, <input type="text" value={"embeded"} />]);


  }

  const handleAddProduct=()=>{
    const addPos = {position:orderOfrender.length,type:"addProduct"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleAddProduct");
    // console.log(orderOfrender);
    content.position = orderOfrender
    content.position.map((e)=>{console.log(e)})
    updatedFContent(id)
    setOrderOfInput([...orderOfInput, <input type="text" value={"product"} />]);


  }

  const handleAddText=()=>{
    const addPos = {position:orderOfrender.length,type:"addText"}
    const updatedPosition = [...orderOfrender,addPos] 
    orderOfrender = updatedPosition
    console.log("handleAddText");
    // console.log(orderOfrender);
    // logPos(orderOfrender)
    content.position = orderOfrender
    content.position.map((e)=>{console.log(e)})
    // const listItems = items.map((item)=>item.id===id?{...item,checked:!item.checked} : item)
    // const updatedFContent = fContent.map((aob)=>aob.id===id?{...aob,position:orderOfrender}:null)
    updatedFContent(id)
    setOrderOfInput([...orderOfInput, <input type="text" value={"text"} />]);
  }

  const updatedFContent=(id)=>{    
    const updatedFeatureContent = fContent.map((aob)=>aob.id===id?{...aob,position:orderOfrender}:null)
    // setFContent(...fContent,updatedFContent)
  }
  

  return (
    <div className=' bg-gray-800'>
        <input type="text" value={'Section Title'} className='w-[85%] bg-gray-800 m-2'/>
        <hr className='m-2'/>

        <div>
          
        </div>
        {/* {content.position.map((inputComp)=>(inputComp.type=="addMedia")?<input type="text" value={"media"} />:(inputComp.type=="embededMedia")?<input type="text" value={"embededMedia"} />:(inputComp.type=="addProduct")?<input type="text" value={"addProduct"} />:(inputComp.type=="addText")?<input type="text" value={"addText"} />:null) } */}
        {/* {content.position.map((inputComp)=>(inputComp.type=="addMedia")?comp.media:null) } */}
        <div>
        {orderOfInput.map((input, index) => (
          <div key={index} className=" m-2" >{input}</div>
        ))}
      </div>

        
        <div className=' flex justify-between'>
            <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>Add media</button>
            <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>embeded media</button>
        </div>
        <div className=' flex justify-between'>
            <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>Add product</button>
            <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>Add text</button>
        </div>
    </div>
  )
}

export default FeaturedContent

// import React, { useState } from 'react';
// import AddMedia from "./AddMedia";

// const FeaturedContent = ({ comp, orderOfrender, setFContent, id, fContent, content }) => {
//   const [blockColors, setBlockColors] = useState([]); // Use an array to store block colors

//   const handleAddMedia = () => {
//     // Add the desired color to the blockColors array when Add Media button is clicked
//     setBlockColors([...blockColors, 'blue']); // Change 'blue' to your desired color
//     // ... rest of your code
//   };

//   const handleEmbededMedia = () => {
//     // Add the desired color to the blockColors array when Embeded Media button is clicked
//     setBlockColors([...blockColors, 'green']); // Change 'green' to your desired color
//     // ... rest of your code
//   };

//   const handleAddProduct = () => {
//     // Add the desired color to the blockColors array when Add Product button is clicked
//     setBlockColors([...blockColors, 'red']); // Change 'red' to your desired color
//     // ... rest of your code
//   };

//   const handleAddText = () => {
//     // Add the desired color to the blockColors array when Add Text button is clicked
//     setBlockColors([...blockColors, 'yellow']); // Change 'yellow' to your desired color
//     // ... rest of your code
//   };

//   return (
//     <div className=' bg-slate-700'>
//       <input type="text" value={'Section Title'} className='w-[85%] bg-slate-700 m-2' />
//       <hr className='m-2' />

//       {/* Render multiple block divs with different background colors */}
//       <div>
//         {blockColors.map((color, index) => (
//           <div key={index} className="block h-4 w-4" style={{ backgroundColor: color }}></div>
//         ))}
//       </div>

//       <div className=' flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddMedia}>Add media</button>
//         <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleEmbededMedia}>Embeded media</button>
//       </div>
//       <div className=' flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddProduct}>Add product</button>
//         <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddText}>Add text</button>
//       </div>
//     </div>
//   );
// }

// export default FeaturedContent;
