import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey');
    }, []);

    useEffect(() => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect(() => {
        // console.log('Email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                    />
            </div>

            <div className='form-group mt-3'>
                <input 
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                    />
            </div>

            { name === '123' && <Message /> }

        </>
    )
}
