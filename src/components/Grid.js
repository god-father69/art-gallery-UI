
import React from 'react'

import gallery from '../assets/data.json'
// import './App.css';

import '../Css/tailwind.css';

const Grid = () => {

  return (
  
        <div className="row">
        
          {gallery.map((el, i) => {
            return (
              <>
              
                <div className="hk">
                  <img
                    
                    src={gallery[i].imgSrc}
                    alt={gallery[i].title}
                  />
                </div>
              </>
            )
          })}
        </div>
   
  )
}

export default Grid
