// import React from 'react'

// const LabelAndInput = ({label,text,setText}) => {
//   return (
//     <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col">
//         <div className=" mb-1">
//             <label htmlFor="inputField">{label}</label>
//         </div>
//         <div className='mb-1'>
//             <input  value={text} type="text"  placeholder={`Enter your ${label}`} name="inputField" id='in' className=" border " onChange={(e)=>(setText(e.target.value))} />
//         </div>
//     </form>
//   )
// }

// export default LabelAndInput

import React from 'react'

const LabelAndInput = ({label,text,setText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col">
        <div className=" mb-1">
            <label htmlFor="inputField" className="text-white ">{label}</label>
        </div>
        <div className='mb-1'>
            <input  value={text} type="text"  placeholder={`Enter your ${label}`} name="inputField" id='in' className="  w-[80%]  bg-black text-white" onChange={(e)=>(setText(e.target.value))} />
        </div>
    </form>
  )
}

export default LabelAndInput