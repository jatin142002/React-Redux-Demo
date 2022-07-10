import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/index.js';

function HooksCakeContainer() {

    // this hook accepts function as an argument and i.e called as selector function this function accepts
    // redux state as its argument 
    const numofCakes = useSelector(state=>state.cake.numofCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes - {numofCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;