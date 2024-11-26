/* eslint-disable */
import React from 'react';
import StateHookDemo from './1_StateHookDemo';
import EffectHookDemo from './2_EffectHookDemo';
import EffectHookAjax from './3_EffectHookAjax';
import CounterAssignment from './4_CounterAssignment';
import ReducerHookDemo from './5_ReducerHookDemo';
import ContextHookDemo from './6_ContextHookDemo';
import CounterRoot from './code-structuring/CounterRoot';
import CallbackAndMemoHookDemo from './7_CallbackAndMemoHookDemo';

const HooksRoot = () => {
    return (
        <div>
            {/* <StateHookDemo /> */}
            {/* <EffectHookDemo /> */}
            {/* <EffectHookAjax /> */}
            {/* <CounterAssignment /> */}
            {/* <ReducerHookDemo /> */}
            {/* <ContextHookDemo /> */}
            {/* <CounterRoot /> */}
            <CallbackAndMemoHookDemo />
        </div>
    );
};

export default HooksRoot;