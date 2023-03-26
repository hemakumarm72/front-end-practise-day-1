import React from 'react';
import './checkbox.css';

function Checkbox({ label, checked, checkedSet }) {
    // const defaultChecked = checked || false;

    //   const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    className={checked ? 'checked' : ''}
                    type="checkbox"
                    checked={checked}
                    onChange={() => checkedSet((prev) => !prev)}
                />
                <span>{label}</span>
                {/* <p>{isChecked ? 'Selected' : 'Unchecked'}</p> */}
            </label>
        </div>
    );
}
export default Checkbox;
