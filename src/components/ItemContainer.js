import React from 'react'
import {connect} from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return (
    <div>
        <h2>Item - {props.item} </h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state , ownProps)=>{

    const itemState = ownProps.cake ? state.cake.numofCakes : state.iceCream.numofIceCream;
    return{
        item: itemState
    }

}

const mapDispatchToProps = (dispatch , ownProps)=>{
    
    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()) : ()=>dispatch(buyIceCream());
    return{
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ItemContainer);

// if you do not want to subscribe state changes to the store and just want to dispatch actions
//  export default connect(null , mapDispatchToProps)(ItemContainer);

// if you don't want to dispatch actions
// export default connect(mapStateToProps)(ItemContainer);