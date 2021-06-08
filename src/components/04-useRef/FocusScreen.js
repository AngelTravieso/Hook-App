import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    // useRef se usa para mantener una referencia a un elemento mutable, es decir, darle seguimiento a inputs, objetos, numeros, etc
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className='form-control'
                placeholder='Nombre'
            >
            </input>

            <button
                className='btn btn-outline-primary mt-5'
                onClick={ handleClick }
            >
                Focus
            </button>

        </div>
    )
}
