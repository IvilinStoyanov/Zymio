import { authReducer } from './authReducer';
import { surveysReducer } from './surveysReducer';
import { reducer as reduxForm } from 'redux-form';

const reducer = {
    auth: authReducer,
    surveys: surveysReducer,
    form: reduxForm
};

export default reducer;