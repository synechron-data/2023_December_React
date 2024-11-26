import React, { useEffect, useState } from 'react';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';
import postApiClient from '../../services/post-api-client';

const EffectHookAjax = () => {
    const [cState, setcState] = useState({
        data: [],
        message: "Loading data, please wait...",
        flag: false
    });

    // useEffect(() => {
    //     postApiClient.getAllPostsUsingPromise().then((data) => {
    //         setcState({ data: data, message: "", flag: true });
    //     }).catch((err) => {
    //         setcState({ data: [], message: err, flag: true });
    //     });
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await postApiClient.getAllPostsAsync();
                setcState({ data: data, message: "", flag: true });
            } catch (err) {
                setcState({ data: [], message: err, flag: true });
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{cState.message}</h4>
            </div>

            {
                !cState.flag ? <LoaderAnimation /> : null
            }

            <DataTable items={cState.data}>
                <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
            </DataTable>
        </div>
    );
}

export default EffectHookAjax;