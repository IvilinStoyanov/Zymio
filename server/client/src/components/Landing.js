import React from 'react';

const Landing = () => {
    return (
        <div>
            <div className='bg'></div>
            <div className='p-centred white-text' style={{ textAlign: 'center', top: '30%' }}>
                <h1 style={{ marginBottom: '0' }}>Zymio</h1>
                <h5 style={{ marginTop: '5px', marginBottom: '20px' }}>will help you to collect the feedback</h5>
                <button className='btn main-bg' style={{ marginBottom: '10px' }}><a href="/auth/google" className='white-text'>Login with Google</a></button>
            </div>
            <div className='bg-bottom'>
                <img src='./images/bg-bottom.png' alt='background-bottom'></img>
            </div>
        </div>
    );
};

export default Landing;