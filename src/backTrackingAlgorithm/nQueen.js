import React from 'react'
import { useEffect } from 'react'
import "./nQueen.css"
import visualization from './visualization';
import { board } from './board';
const NQueen = () => {
  const SIZE_OF_BOARD = 8;
  useEffect(() => {
    board(SIZE_OF_BOARD);
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row'>

          <div className='col-sm-8'>
            <div className='row'>
              <div className='col-sm-12'>
                <center>
                
                  <h2 style={{ marginTop:'20px', fontWeight:"bolder" , paddingTop:'20px'   ,  color:'orange'}}>
                  N-Queens Visualiser
                    </h2>
                    <hr style={{backgroundColor:'orange'}}/>
                </center>
              </div>
            </div>
            <div className='box board mb-2' id="Board">
            
          board
            </div>
            <div className='row'>
              <div className='input-group mt-3 ml-1 container col-sm-6'>
                <div className='input-group-append' >
                  <button
                    
                    style={{borderRadius:'10px' ,fontSize:'20px' , padding:'10px 15px ' , backgroundColor:'green' , color:'wheat' , border:'2px solid white' }}
                    onClick={() => visualization()}
                  >
                    Visualize N queen
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="Iterations" className='col-sm-4 mt-3'></div>
        </div>
      </div>
    </>




  )
}

export default NQueen