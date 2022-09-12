import React from 'react';

const SurveryField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            {touched && error}
        </div>
    );
};

export default SurveryField;