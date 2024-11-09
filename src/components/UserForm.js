import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';

const UserForm = ({ setUserInfo }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo({ name, status });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update User Information</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Status:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default connect(null, { setUserInfo })(UserForm);