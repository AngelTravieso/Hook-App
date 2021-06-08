import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallBackHook = () => {

    /**
     * el useCallback se usa cuando:
     *      1. Se pasa una funcion como parametro a un componente hijo
     *      2. Cuando tenemos un useEffect y ese efecto tiene una dependencia que es la funcion es recomendado usarlo
     */

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [ setCounter ]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />



        </div>
    )
}
