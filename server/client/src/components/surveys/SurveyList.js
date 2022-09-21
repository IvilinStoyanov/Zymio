import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className='col s12 m6' key={survey._id}>
                    <div className='card'>
                        <div className='card-content'>
                            <span className='card-title'>{survey.title}</span>
                            <p>
                                {survey.body}
                            </p>
                            <p className='right'>
                                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                        <div className='card-action'>
                            <a href='/surveys'>Positive: {survey.good}</a>
                            <a href='/surveys'>Negative: {survey.bad}</a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='row'>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);