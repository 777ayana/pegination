import React from 'react';
import Spinner from '../Spinner';

const Countries = ({ countries, loading }) => {
    if (loading) {
        return <Spinner />

    }
    //console.log(countries);
    return (
        <ul style={{ padding: 0, width: '90%', margin: 'auto' }}>
            {
                countries.map((country, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h2>{country.name}</h2>
                        <img width={300} src='' />
                    </li>

                ))
            }

        </ul>
    );
};

export default Countries;