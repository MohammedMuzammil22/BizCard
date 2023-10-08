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




// import React from 'react'
// import AddMedia from "./AddMedia"
// import { useState } from 'react'
// import ActionInput from '../ActionInput';

// const FeaturedContent = ({setFContent,id,fContent,content}) => {

//   const [orderOfInput, setOrderOfInput] = useState([]); 
//   setFContent({id:id, orderOfrender:[]})



//   // const [comp,setComp]=useState({media:<input type="text" value={"media"} />,embededMedia:<input type="text" value={"embededmedia"} />,product:<input type="text" value={"product"} />,text:<input type="text" value={"text"} />});
//   const handleAddMedia=()=>{
//     // const addPos = {position:orderOfrender.length,type:"addMedia"}
//     // const updatedPosition = [...orderOfrender,addPos] 
//     // orderOfrender = updatedPosition
//     // console.log("handleAddMedia");
//     // // console.log(orderOfrender);
//     // content.position = orderOfrender
//     // content.position.map((e)=>{console.log(e)})
//     // updatedFContent(id)
//     // setOrderOfInput([...orderOfInput, <input type="text" value={"media"} />]);
//     const addPos = {position:fContent.orderOfrender.length, type:"addMedia", value:""}
//     const fContentPos = fContent.orderOfrender
//     fContent.orderOfrender = [...fContentPos, addPos]


//   }

//   const handleEmbededMedia=()=>{
//     // const addPos = {position:orderOfrender.length,type:"embededMedia"}
//     // const updatedPosition = [...orderOfrender,addPos] 
//     // orderOfrender = updatedPosition
//     // console.log("handleEmbededMedia");
//     // // console.log(orderOfrender);
//     // content.position = orderOfrender
//     // content.position.map((e)=>{console.log(e)})
//     // updatedFContent(id)
//     // setOrderOfInput([...orderOfInput, <input type="text" value={"embeded"} />]);
//     const addPos = {position:fContent.orderOfrender.length, type:"embeded", value:""}
//     const fContentPos = fContent.orderOfrender
//     fContent.orderOfrender = [...fContentPos, addPos]



//   }

//   const handleAddProduct=()=>{
//     // const addPos = {position:orderOfrender.length,type:"addProduct"}
//     // const updatedPosition = [...orderOfrender,addPos] 
//     // orderOfrender = updatedPosition
//     // console.log("handleAddProduct");
//     // // console.log(orderOfrender);
//     // content.position = orderOfrender
//     // content.position.map((e)=>{console.log(e)})
//     // updatedFContent(id)
//     // setOrderOfInput([...orderOfInput, <input type="text" value={"product"} />]);
//     const addPos = {position:fContent.orderOfrender.length, type:"product", value:""}
//     const fContentPos = fContent.orderOfrender
//     fContent.orderOfrender = [...fContentPos, addPos]

//   }

//   const handleAddText=()=>{
//     // const addPos = {position:orderOfrender.length,type:"addText"}
//     // const updatedPosition = [...orderOfrender,addPos] 
//     // orderOfrender = updatedPosition
//     // console.log("handleAddText");
//     // // console.log(orderOfrender);
//     // // logPos(orderOfrender)
//     // content.position = orderOfrender
//     // content.position.map((e)=>{console.log(e)})
//     // // const listItems = items.map((item)=>item.id===id?{...item,checked:!item.checked} : item)
//     // // const updatedFContent = fContent.map((aob)=>aob.id===id?{...aob,position:orderOfrender}:null)
//     // updatedFContent(id)
//     // setOrderOfInput([...orderOfInput, <input type="text" value={"text"} />]);
//     const addPos = {position:fContent.orderOfrender.length, type:"text", value:""}
//     const fContentPos = fContent.orderOfrender
//     fContent.orderOfrender = [...fContentPos, addPos]

//   }

//   // const updatedFContent=(id)=>{    
//   //   const updatedFeatureContent = fContent.map((aob)=>aob.id===id?{...aob,position:orderOfrender}:null)
//   //   // setFContent(...fContent,updatedFContent)
//   // }
  

//   return (
//     <div className=' bg-gray-800'>
//         <input type="text" value={'Section Title'} className='w-[85%] bg-gray-800 m-2'/>
//         <hr className='m-2'/>

//         <div>
          
//         </div>
//         {/* {content.position.map((inputComp)=>(inputComp.type=="addMedia")?<input type="text" value={"media"} />:(inputComp.type=="embededMedia")?<input type="text" value={"embededMedia"} />:(inputComp.type=="addProduct")?<input type="text" value={"addProduct"} />:(inputComp.type=="addText")?<input type="text" value={"addText"} />:null) } */}
//         {/* {content.position.map((inputComp)=>(inputComp.type=="addMedia")?comp.media:null) } */}
        
//         {/* <div>
//         {orderOfInput.map((input, index) => (
//           <div key={index} className=" m-2" >{input}</div>
//         ))}
//       </div> */}

        
//         <div className=' flex justify-between'>
//             <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>Add media</button>
//             <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>embeded media</button>
//         </div>
//         <div className=' flex justify-between'>
//             <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>Add product</button>
//             <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>Add text</button>
//         </div>
//     </div>
//   )
// }
// // corrrect
// export default FeaturedContent



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

// import React, { useState } from 'react';
// import AddMedia from './AddMedia';
// import ActionInput from '../ActionInput';

// const FeaturedContent = ({ setFContent, id, fContent, content }) => {
//   const [orderOfInput, setOrderOfInput] = useState([]);
//   // setFContent({id:id, orderOfrender:[]})


//   const handleAddMedia = () => {
//     const addPos = { position: fContent.orderOfrender.length, type: 'addMedia', value: '' };
//     const fContentPos = fContent.orderOfrender;
//     fContentPos.push(addPos);
//     setFContent({ ...fContent, orderOfrender: fContentPos });
//   };

//   const handleEmbededMedia = () => {
//     const addPos = { position: fContent.orderOfrender.length, type: 'embeded', value: '' };
//     const fContentPos = fContent.orderOfrender;
//     fContentPos.push(addPos);
//     setFContent({ ...fContent, orderOfrender: fContentPos });
//   };

//   const handleAddProduct = () => {
//     const addPos = { position: fContent.orderOfrender.length, type: 'product', value: '' };
//     const fContentPos = fContent.orderOfrender;
//     fContentPos.push(addPos);
//     setFContent({ ...fContent, orderOfrender: fContentPos });
//   };

//   const handleAddText = () => {
//     const addPos = { position: fContent.orderOfrender.length, type: 'text', value: '' };
//     const fContentPos = fContent.orderOfrender;
//     fContentPos.push(addPos);
//     setFContent({ ...fContent, orderOfrender: fContentPos });
//   };

//   return (
//     <div className='bg-gray-800'>
//       <input type="text" value={'Section Title'} className='w-[85%] bg-gray-800 m-2' />
//       <hr className='m-2' />
//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>
//           Add media
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>
//           Embeded media
//         </button>
//       </div>
//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>
//           Add product
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>
//           Add text
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedContent;


// gpt working
// const FeaturedContent = ({ setFContent, id, fContent, content }) => {
//   const handleAddMedia = () => {
//     const orderOfrender = content.orderOfrender || []; // Initialize if undefined
//     const addPos = { position: orderOfrender.length, type: 'addMedia', value: '' };
//     const updatedContent = { ...content, orderOfrender: orderOfrender }; // Ensure orderOfrender is set
//     updatedContent.orderOfrender.push(addPos);
//     setFContent((prevFContent) =>
//       prevFContent.map((item, index) =>
//         index === id - 1 ? updatedContent : item
//       )
//     );
//   };

//   const handleEmbededMedia = () => {
//     const orderOfrender = content.orderOfrender || [];
//     const addPos = { position: orderOfrender.length, type: 'embeded', value: '' };
//     const updatedContent = { ...content, orderOfrender: orderOfrender };
//     updatedContent.orderOfrender.push(addPos);
//     setFContent((prevFContent) =>
//       prevFContent.map((item, index) =>
//         index === id - 1 ? updatedContent : item
//       )
//     );
//   };

//   const handleAddProduct = () => {
//     const orderOfrender = content.orderOfrender || [];
//     const addPos = { position: orderOfrender.length, type: 'product', value: '' };
//     const updatedContent = { ...content, orderOfrender: orderOfrender };
//     updatedContent.orderOfrender.push(addPos);
//     setFContent((prevFContent) =>
//       prevFContent.map((item, index) =>
//         index === id - 1 ? updatedContent : item
//       )
//     );
//   };

//   const handleAddText = () => {
//     const orderOfrender = content.orderOfrender || [];
//     const addPos = { position: orderOfrender.length, type: 'text', value: '' };
//     const updatedContent = { ...content, orderOfrender: orderOfrender };
//     updatedContent.orderOfrender.push(addPos);
//     setFContent((prevFContent) =>
//       prevFContent.map((item, index) =>
//         index === id - 1 ? updatedContent : item
//       )
//     );
//   };

//   return (
//     <div className='bg-gray-800'>
//       <input type="text" value={'Section Title'} className='w-[85%] bg-gray-800 m-2' />
//       <hr className='m-2' />

//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>
//           Add media
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>
//           Embeded media
//         </button>
//       </div>
//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>
//           Add product
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>
//           Add text
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedContent;



// in FeaturedContent in want the fContent object to be created it should contain {id:id, orderOfrender:[]} the orderOfrender should contain objects such as  { position: orderOfrender.length, type: 'product', value: '' } when the corresponding button is clicked and the important thing is that all these changes should be updated in fContent 



// import React, { useState } from 'react';

// const FeaturedContent = ({ setFContent, id, fContent, content }) => {
//   const [sectionTitle, setSectionTitle] = useState('Section Title');
//   const [orderOfRender, setOrderOfRender] = useState([]);

//   // const handleAddMedia = () => {
//   //   // Add a new media section to the orderOfRender array
//   //   const newPosition = orderOfRender.length;
//   //   setOrderOfRender([...orderOfRender, { position: newPosition, type: 'media', value: '' }]);
//   //   updateFContent();
//   // };

//   // const handleEmbededMedia = () => {
//   //   // Add a new embeded media section to the orderOfRender array
//   //   const newPosition = orderOfRender.length;
//   //   setOrderOfRender([...orderOfRender, { position: newPosition, type: 'embededmedia', value: '' }]);
//   //   updateFContent();
//   // };

//   // const handleAddProduct = () => {
//   //   // Add a new product section to the orderOfRender array
//   //   const newPosition = orderOfRender.length;
//   //   setOrderOfRender([...orderOfRender, { position: newPosition, type: 'product', value: '' }]);
//   //   updateFContent();
//   // };

//   // const handleAddText = () => {
//   //   // Add a new text section to the orderOfRender array
//   //   const newPosition = orderOfRender.length;
//   //   setOrderOfRender([...orderOfRender, { position: newPosition, type: 'text', value: '' }]);
//   //   updateFContent();
//   // };

//   const handleAddMedia = () => {
//     // Add a new media section to the orderOfRender array
//     setOrderOfRender((prevOrderOfRender) => {
//       const newPosition = prevOrderOfRender.length;
//       const newOrder = [...prevOrderOfRender, { position: newPosition, type: 'media', value: '' }];
//       updateFContent(newOrder);
//       return newOrder;
//     });
//   };
  
//   const handleEmbededMedia = () => {
//     // Add a new embeded media section to the orderOfRender array
//     setOrderOfRender((prevOrderOfRender) => {
//       const newPosition = prevOrderOfRender.length;
//       const newOrder = [...prevOrderOfRender, { position: newPosition, type: 'embededmedia', value: '' }];
//       updateFContent(newOrder);
//       return newOrder;
//     });
//   };
  
//   const handleAddProduct = () => {
//     // Add a new product section to the orderOfRender array
//     setOrderOfRender((prevOrderOfRender) => {
//       const newPosition = prevOrderOfRender.length;
//       const newOrder = [...prevOrderOfRender, { position: newPosition, type: 'product', value: '' }];
//       updateFContent(newOrder);
//       return newOrder;
//     });
//   };
  
//   const handleAddText = () => {
//     // Add a new text section to the orderOfRender array
//     setOrderOfRender((prevOrderOfRender) => {
//       const newPosition = prevOrderOfRender.length;
//       const newOrder = [...prevOrderOfRender, { position: newPosition, type: 'text', value: '' }];
//       updateFContent(newOrder);
//       return newOrder;
//     });
//   };

//   // Update the fContent object with the new orderOfRender array
//   const updateFContent = () => {
//     setFContent((prevFContent) => {
//       const updatedFContent = [...prevFContent];
//       updatedFContent[id - 1] = {
//         ...updatedFContent[id - 1],
//         id:id,
//         title:sectionTitle,
//         orderOfRender: orderOfRender,
//       };
//       return updatedFContent;
//     });
//   };
//   // updateFContent();

//   return (
//     <div className='bg-gray-800'>
//       <input
//         type='text'
//         value={sectionTitle}
//         className='w-[85%] bg-gray-800 m-2'
//         onChange={(e) => {setSectionTitle(e.target.value);
//                           updateFContent();}}
//       />
//       <hr className='m-2' />
//       {/* {fContent.map((e)=>console.log(e))} */}
//       {fContent.forEach((e) => console.log("Fcontent:", e))} 


//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>
//           Add media
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>
//           Embeded media
//         </button>
//       </div>
//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>
//           Add product
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>
//           Add text
//         </button>
//       </div>

//       {/* <button className='bg-gray-700 m-2' onClick={updateFContent}>
//         Save Changes
//       </button> */}
//     </div>
//   );
// };

// export default FeaturedContent;






//www
// import React, { useState } from 'react';

// const FeaturedContent = ({ setFContent, id, fContent, content }) => {
//   const [sectionTitle, setSectionTitle] = useState('Section Title');
//   const [orderOfRender, setOrderOfRender] = useState([]);

//   const handleAddMedia = () => {
//     // Add a new media section to the orderOfRender array
//     const newPosition = orderOfRender.length;
//     const newOrder = [...orderOfRender, { position: newPosition, type: 'media', value: '' }];
//     setOrderOfRender(newOrder);
//     updateFContent(newOrder);
//   };

//   const handleEmbededMedia = () => {
//     // Add a new embeded media section to the orderOfRender array
//     const newPosition = orderOfRender.length;
//     const newOrder = [...orderOfRender, { position: newPosition, type: 'embededmedia', value: '' }];
//     setOrderOfRender(newOrder);
//     updateFContent(newOrder);
//   };

//   const handleAddProduct = () => {
//     // Add a new product section to the orderOfRender array
//     const newPosition = orderOfRender.length;
//     const newOrder = [...orderOfRender, { position: newPosition, type: 'product', value: '' }];
//     setOrderOfRender(newOrder);
//     updateFContent(newOrder);
//   };

//   const handleAddText = () => {
//     // Add a new text section to the orderOfRender array
//     const newPosition = orderOfRender.length;
//     const newOrder = [...orderOfRender, { position: newPosition, type: 'text', value: '' }];
//     setOrderOfRender(newOrder);
//     updateFContent(newOrder);
//   };

//   // Update the fContent object with the new orderOfRender array
//   // const updateFContent = (newOrder) => {
//   //   setFContent((prevFContent) => {
//   //     const updatedFContent = [...prevFContent];
//   //     updatedFContent[id - 1] = {
//   //       ...updatedFContent[id - 1],
//   //       id: id,
//   //       title: sectionTitle,
//   //       orderOfRender: newOrder,
//   //     };
//   //     return updatedFContent;
//   //   });
//   // };

//   const updateFContent = (newOrder, newSectionTitle) => {
//     setFContent((prevFContent) => {
//       const updatedFContent = [...prevFContent];
//       updatedFContent[id - 1] = {
//         ...updatedFContent[id - 1],
//         id: id,
//         title: newSectionTitle, // Use the newSectionTitle here
//         orderOfRender: newOrder,
//       };
//       return updatedFContent;
//     });
//   };
  

//   return (
//     <div className='bg-gray-800'>
//       {/* <input
//         type='text'
//         value={sectionTitle}
//         className='w-[85%] bg-gray-800 m-2'
//         onChange={(e) => {
//           setSectionTitle(e.target.value);
//           // updateFContent(orderOfRender);
//         }}
//       /> */}

//       <input
//         type='text'
//         value={sectionTitle}
//         className='w-[85%] bg-gray-800 m-2'
//         onChange={(e) => {
//           const newSectionTitle = e.target.value;
//           setSectionTitle(newSectionTitle, () => {
//             updateFContent(orderOfRender, newSectionTitle);
//           });
//         }}
//       />


//       <hr className='m-2' />
//      {fContent.forEach((e) => console.log("Fcontent:", e))} 


//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>
//           Add media
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>
//           Embeded media
//         </button>
//       </div>
//       <div className='flex justify-between'>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>
//           Add product
//         </button>
//         <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>
//           Add text
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedContent;

import React, { useState, useEffect } from 'react';
import MediaComponent from './MediaComponent';

const FeaturedContent = ({ setFContent, id, fContent, content }) => {
  const [sectionTitle, setSectionTitle] = useState('Section Title');
  const [orderOfRender, setOrderOfRender] = useState([]);
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaValue, setMediaValue] = useState('');

  useEffect(() => {
    // This effect runs whenever sectionTitle or orderOfRender changes
    updateFContent();
  }, [sectionTitle, orderOfRender]);

  const handleAddMedia = () => {
    // Add a new media section to the orderOfRender array
    const newPosition = orderOfRender.length;
    const newOrder = [...orderOfRender, { position: newPosition, type: 'media', value: '' }];
    setOrderOfRender(newOrder);
  };

  const handleEmbededMedia = () => {
    // Add a new embedded media section to the orderOfRender array
    const newPosition = orderOfRender.length;
    const newOrder = [...orderOfRender, { position: newPosition, type: 'embededmedia', value: '' }];
    setOrderOfRender(newOrder);
  };

  const handleAddProduct = () => {
    // Add a new product section to the orderOfRender array
    const newPosition = orderOfRender.length;
    const newOrder = [...orderOfRender, { position: newPosition, type: 'product', value: '' }];
    setOrderOfRender(newOrder);
  };

  const handleAddText = () => {
    // Add a new text section to the orderOfRender array
    const newPosition = orderOfRender.length;
    const newOrder = [...orderOfRender, { position: newPosition, type: 'text', value: '' }];
    setOrderOfRender(newOrder);
  };

  // Update the fContent object with the new orderOfRender array and sectionTitle
  const updateFContent = () => {
    setFContent((prevFContent) => {
      const updatedFContent = [...prevFContent];
      updatedFContent[id - 1] = {
        ...updatedFContent[id - 1],
        id: id,
        title: sectionTitle,
        orderOfRender: orderOfRender,
      };
      return updatedFContent;
    });
  };

  return (
    <div className='bg-gray-800'>
      <input
        type='text'
        value={sectionTitle}
        className='w-[85%] bg-gray-800 m-2'
        onChange={(e) => setSectionTitle(e.target.value)}
      />

      <hr className='m-2' />
      {fContent.forEach((e) => console.log("Fcontent:", e))} 

      {orderOfRender.map((item, index) => {
        if (item.type === 'media') {
          return (
            <MediaComponent
              key={index}
              onMediaChange={(newMediaValue) => {
                // Update mediaValue in the state
                setMediaValue(newMediaValue);
              }}
              mediaValue={mediaValue}
            />
          );
        }
        return null;
      })}


      <div className='flex justify-between'>
        <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddMedia}>
          Add media
        </button>
        <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleEmbededMedia}>
          Embeded media
        </button>
      </div>
      <div className='flex justify-between'>
        <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddProduct}>
          Add product
        </button>
        <button className='rounded-sm w-[50%] m-2 bg-gray-700' onClick={handleAddText}>
          Add text
        </button>
      </div>
    </div>
  );
};

export default FeaturedContent;
