import React from 'react';
import "../styles/DateField.css";

export const DateField = ({ label, n, data = [] }) => {
    return (
        <div className="user-date-wrp" style={{ width: n}}>
            <select name="date" className='inputDate' id="">
                <option value="" selected disabled></option>
                {data.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            <span className='static-label'>{label}</span>
        </div>
    );
}
