import React from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(SurveyFormReview);