import React from 'react';
import './csspage.scss';
import qrcodeimg from 'Asset/image/image-qr-code.png';

const csspage = () => {
    return (
        <div>
            <div className="container">
                <div className="qrcodecontainer">
                    <div className="innercard">
                        <img src={qrcodeimg} alt="" />
                        <p>
                            Improve your front-end <br /> skills by building
                            projects
                        </p>
                        <span>
                            <p>
                                scan the Qrcode to visit Frontend <br /> Mentor
                                and take your coding skills to <br /> the next
                                level
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default csspage;
