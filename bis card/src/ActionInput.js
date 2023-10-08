// import React from 'react'

// const ActionInput = ({iconLabel,text,setText}) => {
//     return (
//         <form onSubmit={(e)=>e.preventDefault()} className="flex flex-row ">
//             <div className=" mb-1 bg-green-400 flex justify-center items-center w-[4%]">
//                 {iconLabel}
//             </div> 
//             <div className='mb-1 '>
//                 <input  value={text} type="text"  placeholder={`Enter the url`} name="inputField" id='in' className=" border " onChange={(e)=>(setText(e.target.value))} />
//             </div>
//         </form>
//       )
// }

// export default ActionInput

import React from 'react';

const ActionInput = ({ iconLabel, text, setText }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-row ">
      <div className="mb-1 bg-green-400 flex justify-center items-center w-[4%]">
        {iconLabel}
      </div>
      <div className="mb-1 ">
        <input
          value={text}
          type="text"
          placeholder={`Enter the url`}
          name="inputField"
          id="in"
          className=" bg-black text-white"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default ActionInput;


