import React from 'react'

const StudentLogout =() => {
    localStorage.clear();
    window.location.href = '/';
}

export default StudentLogout
