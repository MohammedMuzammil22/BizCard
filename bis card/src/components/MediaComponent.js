// import React from 'react'

// const AddMedia = () => {

    

//     return (
//         <div>
        
//         </div>
            
            
//     )
// }

// export default AddMedia 
import React from 'react';

const MediaComponent = ({ onMediaChange, mediaValue }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can handle the file here, for example, save it to state
    onMediaChange(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <input type="text" value={mediaValue} onChange={(e) => onMediaChange(e.target.value)} />
    </div>
  );
};

export default MediaComponent;
