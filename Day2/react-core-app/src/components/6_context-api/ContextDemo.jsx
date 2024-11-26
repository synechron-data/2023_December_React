/* eslint-disable */
import React from 'react';
import WithoutContext from './WithoutContext';
import WithContext from './WithContext';
import MultiContext from './MultiContext';

const ContextDemo = () => {
    return (
        <div>
            {/* <WithoutContext /> */}
            {/* <WithContext /> */}
            <MultiContext />
        </div>
    );
};

export default ContextDemo;