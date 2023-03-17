import React from 'react';
import './loadbtn.scss';

function loadbtn({
    id,
    loadfunction,
    loadingdata,
    loadingbeforetext,
    loadingaftertext,
}) {
    return (
        <div>
            <button
                type="button"
                className="button_submit"
                id={id || 'dummy'}
                onClick={loadfunction}
                disabled={loadingdata}
            >
                {loadingdata && (
                    <i
                        className="fa fa-spinner fa-spin"
                        style={{ marginRight: '5px' }}
                    />
                )}
                {loadingdata && <span>{loadingaftertext}</span>}
                {!loadingdata && <span>{loadingbeforetext}</span>}
            </button>
        </div>
    );
}

export default loadbtn;
