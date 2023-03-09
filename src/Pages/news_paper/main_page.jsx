// import { newspaper } from 'Asset/data/newspaper';
import { Container } from 'Components';
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../../Asset/image/logo.svg';
import './main_page.scss';
import { LoadButton } from 'Elements';
import axios from 'axios';
// import { TrackBtn } from 'Elements';

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newspaper() {
    const [loading, setLoading] = useState(false);
    const fetchdata = async () => {
        setLoading(true);
        await axios
            .get('https://api.chopeai.com/api/utils/getdriver')
            .then((res) => {
                toast.success(res.data.data.message, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return res;
            })
            .catch((err) => {
                toast.error(err.response?.data?.data?.message || err, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return err;
            });
        setLoading(false);
    };
    // useEffect(() => {
    //     console.log(loading);
    // }, [loading]);
    return (
        <Container>
            {/* <header className="news_header">
                <img src={logo} alt="logo" />
                <nav>
                    {newspaper.map((d) => (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            to={d.link}
                            key={d.name}
                        >
                            {d.name}
                        </NavLink>
                    ))}
                </nav>
            </header> */}
            <div className="centerbtn">
                <LoadButton
                    loadfunction={fetchdata}
                    loadingdata={loading} // true or false set value
                    loadingbeforetext="Login"
                    loadingaftertext="Waiting"
                />
                <ToastContainer />
            </div>
        </Container>
    );
}

export default Newspaper;
