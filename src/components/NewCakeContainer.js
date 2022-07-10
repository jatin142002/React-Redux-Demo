import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux/index.js';

function CakeContainer(props){
    const [number, setnumber] = useState(1);
    return (
        <>
            <div>
                <h2>Number of cakes - {props.numofCakes}</h2>
                <input type='text' value={number} onChange={e => setnumber(e.target.value)}/>
                <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
            </div>
        </> 
    )
}

const mapStateToProps = state => {
    return{
        numofCakes: state.cake.numofCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: (number)=> dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);