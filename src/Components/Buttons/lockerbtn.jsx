import React, { useState } from 'react';
import './loadbtn.scss';
import { Slide, toast } from 'react-toastify';
import axios from 'axios';

function lockerbtn({ locker_id }) {
    const [loading, setLoading] = useState(false);
    const fetchdata = async () => {
        setLoading(true);
        await axios
            .post('https://api.cstsmartlocker.com/locker/lockrelease', {
                locker_id,
                userid: 1,
            })
            .then((res) => {
                toast.success(res.data.message, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return res;
            })
            .catch((err) => {
                toast.error(err.response?.data?.message || err, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return err;
            });
        setLoading(false);
    };
    return (
        <div>
            <button
                type="button"
                className="button_submit"
                onClick={fetchdata}
                disabled={loading}
            >
                {loading && (
                    <i
                        className="fa fa-spinner fa-spin"
                        style={{ marginRight: '5px' }}
                    />
                )}
                {loading && <span>Waiting</span>}
                {!loading && <span>Unlock</span>}
            </button>
        </div>
    );
}

export default lockerbtn;
