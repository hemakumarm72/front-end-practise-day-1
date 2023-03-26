import React, { useEffect, useRef, useState } from 'react';
import './admin.scss';
import apiuser from 'api/api';
import { Slide, toast } from 'react-toastify';

const admin = () => {
    const renderAfterCalled = useRef(false);
    const [getbookingdata, setGetbookingdata] = useState([]);
    const dummyfetch = async () => {
        await apiuser
            .getbooking({
                companies_id: '641d5d665106dc9b87bedb46',
            })
            .then((res) => {
                setGetbookingdata(res?.data?.data?.getbooking ?? []);
                toast.success(res?.data.data.message, {
                    autoClose: 2000,
                    transition: Slide,
                });
            })
            .catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.data?.message ?? err, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return err;
            });
    };
    useEffect(() => {
        if (!renderAfterCalled.current) {
            dummyfetch();
        }
        renderAfterCalled.current = true; // single fetch api
    }, []);
    console.log(getbookingdata);
    return (
        <div>
            <p>admin</p>
            {getbookingdata.map((data) => (
                <div key={data.id}>
                    <p key={data.id}>{data.room_name}</p>
                </div>
            ))}
        </div>
    );
};

export default admin;
