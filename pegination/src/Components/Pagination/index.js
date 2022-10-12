import React from 'react';

const Pagination = ({ countriesPerPage, totalCountries }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers);
    return (
        <div>
            {
                pageNumbers.map(number => (
                    <button onClick={() => setCurrentPage(number)} key={number}>{number}</button>
                ))
            }

        </div>
    );
};

export default Pagination;