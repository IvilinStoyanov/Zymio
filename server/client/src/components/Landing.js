import React from 'react';

const Landing = () => {
    return (
        <div>
            <div className='black-text' style={{ textAlign: 'center' }}>
                <h1 style={{ marginBottom: '0' }}>Zymio</h1>
                <h5 style={{ marginTop: '5px', marginBottom: '20px' }}>will help you to collect the feedback</h5>
                <button className='btn main-bg' style={{ marginBottom: '40px' }}><a href="/auth/google" className='white-text'>Sign up now</a></button>
                <div className='bg-bottom'>
                    <img src='./images/bg-bottom.jpg' alt='background-bottom'></img>
                </div>
            </div>
        </div>
    );
};

export default Landing;