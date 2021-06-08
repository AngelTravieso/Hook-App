import React from 'react';

export const Small = React.memo(({ value }) => {

    // Solo si los properties cambian se volvera a llamar

    console.log(' Me volvi a mostrar :( ');

    return (
        <small>
            { value }
        </small>
    )
});