import React from 'react';

const SurveryField = ({ input, label }) => {
    return (
        <div>
            <label>{ label }</label>
            <input {...input} />
        </div>
    );
};

export default SurveryField;