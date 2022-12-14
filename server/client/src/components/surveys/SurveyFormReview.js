import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const fields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div className='container' style={{padding: '20px 0'}}>
            <h5 style={{ marginBottom: '20px' }}>Please revies your entities</h5>
            {fields}
            <button
                className='yellow darken-3 white-text btn-flat'
                style={{ marginTop: '20px' }}
                onClick={onCancel}>
                Back
            </button>
            <button
                className='teal white-text btn-flat right'
                style={{ marginTop: '20px' }}
                onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));