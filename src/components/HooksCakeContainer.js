import React from 'react';
import { useSelector } from 'react-redux';

function HooksCakeContainer() {

    // this hook accepts function as an argument and i.e called as selector function this function accepts
    // redux state as its argument 
    const numofCakes = useSelector(state => state.numOfCakes)

    return (
        <div>
            <h2>Number of cakes - {numofCakes}</h2>
            <button>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;