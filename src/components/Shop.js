import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { buyLaptop,setLaptop } from '../Redux/Actions'


const Shop = (props) => {
    const {noOfLaptops,buyLaptop,setLaptop} = props
  return (
    <div>
      <h1 className='containerDiv'>wellcom to Vshop</h1>
      <div className='availablecount'>
        <h1>Dell Laptops</h1>
        <p>Available count: {noOfLaptops}</p>
        <div>
        <button onClick={buyLaptop} style={{marginRight:'10px'}}>Buy</button>
        <button onClick={setLaptop}>Set</button>
        </div>
      </div>
    </div>
  )
}




const mapStoreToProps = (state) =>{
    return{
        noOfLaptops:state.noOfLaptops
    }
}

const mapDispathToProps = (dispath) =>{
  return{
    buyLaptop: ( )=>{dispath(buyLaptop())},
    setLaptop: () =>{dispath(setLaptop())}
  }
}







export default connect(mapStoreToProps,mapDispathToProps)(Shop)
