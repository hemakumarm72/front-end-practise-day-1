import React, { useState } from 'react';
import './checkbox.css';

function Checkbox({ label, checked }) {
    const defaultChecked = checked || false;

    const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    className={isChecked ? 'checked' : ''}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                />
                <span>{label}</span>
                {/* <p>{isChecked ? 'Selected' : 'Unchecked'}</p> */}
            </label>
        </div>
    );
}
export default Checkbox;
