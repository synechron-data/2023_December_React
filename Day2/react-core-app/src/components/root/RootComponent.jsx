/* eslint-disable */
import React from 'react';
import CounterAssignment from '../1_assignment/CounterAssignment';
import ControlledVsUncontrolled from '../2_controlled-vs-uncontrolled/ControlledVsUncontrolled';
import SiblingCommunication from '../3_sibling-communication/SiblingCommunication';
import CalculatorAssignment from '../4_assignment/CalculatorAssignment';
import ListRoot from '../5_working-with-arrays/ListComponent';
import ErrorHandler from '../common/ErrorHandler';
import ContextDemo from '../6_context-api/ContextDemo';
import SiblingCommunicationUsingContext from '../7_sibling-communication-using-context/SiblingCommunication';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CounterAssignment /> */}
                {/* <ControlledVsUncontrolled /> */}
                {/* <SiblingCommunication /> */}
                {/* <CalculatorAssignment /> */}
                {/* <ListRoot /> */}
                {/* <ContextDemo /> */}
                <SiblingCommunicationUsingContext />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;