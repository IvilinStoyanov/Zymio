import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveryField from './SurveyField';
import validateEmails from '../../util/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Survey Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {
    renderFields() {
        return (
            _.map(FIELDS, ({ label, name }) => {
                return <Field key={name} label={label} type="text" name={name} component={SurveryField} />;
            })
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Submit
                        <i className="material-icons right">done</i></button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
   
    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ label, name }) => {
        if (!values[name]) {
            errors[name] = `${label.toLowerCase()} is required`;
        }
    });

    return errors;

}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);