import React, { useEffect, useState } from 'react';
import './locker.scss';
import LockIcon from '@mui/icons-material/Lock';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { LockerButton, Container } from 'Components';
import axios from 'axios';

// import { Helmetdatas } from '../../Elements';

import { lazy } from '@loadable/component';

const Helmetdatas = lazy(() =>
    import('Elements').then((module) => module.Helmetdata)
);

function locker() {
    const [lockers, setLockers] = useState([]);
    const fetchlocker = async () => {
        await axios
            .get('https://api.cstsmartlocker.com/locker/viewall')
            .then((res) => {
                if (res) {
                    setLockers(res?.data ?? []);
                }
                return res;
            })
            .catch((err) => {
                toast.error(err.response?.data || err, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return err;
            });
    }; // load of data in table with api
    useEffect(() => {
        fetchlocker();
    }, []);
    // console.log(lockers);
    return (
        <>
            <Helmetdatas
                title="Locker Unlock"
                link={window.location.href}
                description="Sentosa locker unlock"
                pagesname="Locker Unlock"
            />
            <Container>
                <div className="lockerBackground">
                    <div className="lockerglass">
                        <div className="row">
                            {lockers.map((d) => (
                                <div className="lockercard">
                                    <LockIcon />
                                    <p>Locker {d.locker_number}</p>
                                    <LockerButton locker_id={d.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </Container>
        </>
    );
}

export default locker;
