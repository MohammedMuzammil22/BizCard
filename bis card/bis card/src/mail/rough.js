// const position = 1
// // const aob = [{id:1,text:[{position:position,text:""}],media:[{position:position,mediaLink:""}], product:[{position:position,image:"",productTitle:"",productDescription:"",productPrice:"",productButtonLink:"",productButtonLabel:"",}], embedMedia:[{position:position,embedCode:""}], position:[{position:position,type:""}] }]
// // console.log(aob[0].text[0].position);
// // // console.log(aob[0].text[0][text]="muzammil");
// // console.log(aob[0].text[0].text = aob[0].text[0].text = 'muzammil');
// // console.log(aob[0]);

// const aob = [{id:1,text:[{position:position,text:""}],media:[{position:position,mediaLink:""}], product:[{position:position,image:"",productTitle:"",productDescription:"",productPrice:"",productButtonLink:"",productButtonLabel:"",}], embedMedia:[{position:position,embedCode:""}], position:[{}] }]
// // console.log(aob[0].position[0] = aob[0].position = {pos:1,type:"url"});
// // console.log(aob[0].position[1] = aob[0].position = {pos:2,type:"media"});
// console.log(aob[0].position);
// console.log(aob[0].position.length + " ...");


// const [fContent,setFContent] = useState(
// )
const position = 1
const aob = [
    {id:1,text:[{position:position,text:""}],media:[{position:position,mediaLink:""}], product:[{position:position,image:"",productTitle:"",productDescription:"",productPrice:"",productButtonLink:"",productButtonLabel:"",}], embedMedia:[{position:position,embedCode:""}], position:[{position:position,mediaLink:"a"},{position:position,mediaLink:"s"},{position:position,mediaLink:"d"},{position:position,mediaLink:"d"}] }
]


console.log("content")
aob.map((wholeObj)=>{
    // console.log(wholeObj.map((e)=>console.log(e))); cant iterate obj
    wholeObj.position.map((pos)=>{
        // console.log("aa "+pos);
        const obj = {position:12,mediaLink:"muza"}
        const updatedpos = [...wholeObj.position, obj]
        // console.log("pos "+pos.position + " " + "media "+pos.mediaLink);
        // console.log(updatedpos);
        
        wholeObj.position = updatedpos
    })

// console.log("aob "+wholeObj.position);
wholeObj.position.map((e)=>{console.log(e)})



    // console.log(wholeObj.position.map((pos)=>{
    //     const updatedpos = [pos, {id:1, type:"text"}]
    //     console.log(".. "+pos)
    // }))

})
console.log("content")


import React, { useState } from 'react';
import AddMedia from "./AddMedia";

const FeaturedContent = ({ comp, orderOfrender, setFContent, id, fContent, content }) => {
  const [blockColors, setBlockColors] = useState([]); // Use an array to store block colors

  const handleAddMedia = () => {
    // Add the desired color to the blockColors array when Add Media button is clicked
    setBlockColors([...blockColors, 'blue']); // Change 'blue' to your desired color
    // ... rest of your code
  };

  const handleEmbededMedia = () => {
    // Add the desired color to the blockColors array when Embeded Media button is clicked
    setBlockColors([...blockColors, 'green']); // Change 'green' to your desired color
    // ... rest of your code
  };

  const handleAddProduct = () => {
    // Add the desired color to the blockColors array when Add Product button is clicked
    setBlockColors([...blockColors, 'red']); // Change 'red' to your desired color
    // ... rest of your code
  };

  const handleAddText = () => {
    // Add the desired color to the blockColors array when Add Text button is clicked
    setBlockColors([...blockColors, 'yellow']); // Change 'yellow' to your desired color
    // ... rest of your code
  };

  return (
    <div className=' bg-slate-700'>
      <input type="text" value={'Section Title'} className='w-[85%] bg-slate-700 m-2' />
      <hr className='m-2' />

      {/* Render multiple block divs with different background colors */}
      <div>
        {blockColors.map((color, index) => (
          <div key={index} className="block h-4 w-4" style={{ backgroundColor: color }}></div>
        ))}
      </div>

      <div className=' flex justify-between'>
        <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddMedia}>Add media</button>
        <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleEmbededMedia}>Embeded media</button>
      </div>
      <div className=' flex justify-between'>
        <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddProduct}>Add product</button>
        <button className='rounded-sm w-[50%] m-2 bg-slate-500' onClick={handleAddText}>Add text</button>
      </div>
    </div>
  );
}

export default FeaturedContent;

<div className='bg-gray-800  p-4 space-x-2 space-y-2  flex flex-wrap justify-between '>
                {primaryAction.map((icon)=>(icon.isVisible)?(
                <div className='w-[48%] '>
                  <button className='  w-[100%] h-8  flex flex-row   items-center bg-gray-700' onClick={()=>handleAddIcon(icon.id,icon,true)}>
                    <div className='pl-4'>{icon.icon}</div>
                    <div className=' flex justify-start px-4'>{icon.name}</div>
                    </button>
                </div>):null
                
                )}
            </div>
