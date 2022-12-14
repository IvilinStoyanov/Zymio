import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveryField from './SurveyField';
import validateEmails from '../../util/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
    renderFields() {
        return (
            _.map(formFields, ({ label, name }) => {
                return <Field key={name} label={label} type="text" name={name} component={SurveryField} />;
            })
        );
    }

    render() {
        return (
            <div className='container' style={{padding: '20px 0'}}>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="yellow darken-3 btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Submit
                        <i className="material-icons right">done</i></button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
   
    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ label, name }) => {
        if (!values[name]) {
            errors[name] = `${label.toLowerCase()} is required`;
        }
    });

    return errors;

}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);