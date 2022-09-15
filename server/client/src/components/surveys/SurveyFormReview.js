import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
    return (
        <div>
            Review
            <button
                className='yellow darken-2 btn-flat'
                onClick={onCancel}>
                Back
            </button>
        </div>
    );
};

export default SurveyFormReview;