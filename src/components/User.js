import React from 'react';
import { connect } from 'react-redux';

const User = ({ user }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Status: {user.status}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(User);