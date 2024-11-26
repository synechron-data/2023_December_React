/* eslint-disable */
import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import CrudAssignment from '../1_assignment/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import HooksRoot from '../3_hooks/HooksRoot';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <AjaxComponent /> */}
                <HooksRoot />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;