import React from 'react';
import ComponentErrorHandlerHOC from '../common/ComponentErrorHandlerHOC';

const HomeComponent = () => {
    // throw new Error('Home crashed!');
    return (
        <div className='text-center'>
            <h1 className="text-primary">Home Component</h1>
            <h4 className="text-warning">This is a Simple, React Routing Application</h4>
        </div>
    );
};

export default ComponentErrorHandlerHOC(HomeComponent);