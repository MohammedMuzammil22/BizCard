// import React from 'react'

// const AddMedia = () => {

//     const img = ''
//     const handleAddImage = (e) =>{
//         img = URL.createObjectURL(e.target.files[0])
//         console.log(".img img added");
//     }

//     return (
//         <div>
//             <label htmlFor="image">AddMedia</label>
//             <input type="file" name="img" id="img" onChange={(e) => (handleAddImage(e))} />
//             <img src={img} alt="noimg" />
//             <form onSubmit={(e) => e.preventDefault()} className="flex flex-row ">
//                 <div className="mb-1 bg-green-400 flex justify-center items-center w-[4%]">
//                     {img}
//                 </div>
//                 <div className="mb-1 ">
//                     <input
//                         // value={text}
//                         type="text"
//                         placeholder={`Add media`}
//                         name="inputField"
//                         // id="in"
//                         className="border"
//                         // onChange={handleChange}
//                     />
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default AddMedia

// <input type="file" onChange={handleImageUpload} style={{ display: "none"}} />

import React from 'react'
import { useState } from 'react'

const AddMedia = () => {

    // const [img,setImg]=useState(null)
    // const handleImageSelection=(e)=>{
    //     const file = e.target.files[0]
    //     setImg(file)
    // }
    const [img,setImg]=useState()


    return (
        <div>
            {/* <button type="button">
                <input type="file" onChange={(e)=>handleImageSelection(e)} />
            </button>
            <img src={img} alt="noimg" />
            <h1>\\ {console.log(img)} //</h1> */}
            <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="image">upload</label>
            <input  accept="image/*" type="file" name="img" id="imgfile" onChange={(e)=>(setImg(URL.createObjectURL(e.target.files[0])))} />
            {img && <img src={img} alt="noimg" />}
    </form>


        </div>
    )
}

export default AddMedia
