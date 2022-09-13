const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
debugger
const validateEmails = emails => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => !regex.test(email));

    if (invalidEmails.lenght)
        return `These emails are invalid ${invalidEmails}`;

};

export default validateEmails;