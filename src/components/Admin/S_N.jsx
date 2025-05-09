import React from 'react';

const S_N = ({ notice }) => {
    const { date, description } = notice;
    return (
        <div className="w-full text-justify">
            <p className="text-base font-medium p-2 text-center text-white bg-amber-400 w-28 rounded-lg mb-3">{date}</p>
            <p className="text-sm font-light">{description}</p>
            <div className="divider divider-info mb-5"></div>
        </div>
    );
};

export default S_N;