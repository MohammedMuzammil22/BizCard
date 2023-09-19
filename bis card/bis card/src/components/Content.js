import React from 'react'

const Content = ({img}) => {
  return (
    <main>
    <div id='img'>
    {(img==null)?(
        <div><button>+</button></div>
        ):(
          <img src={img} alt="" height={40} width={40}/>
        )
    }

        <div>
            <h6>Add logo</h6>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    </main>
    
  )
}

export default Content