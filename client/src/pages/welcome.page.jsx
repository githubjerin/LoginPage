import React from "react";

import welcome from '../res/images/welcome.jpg';

export default function Welcome() {
    return (
        <div className="vh-100 bg-account-pages" style={{ backgroundImage: `url(${welcome})`, backgroundSize: 'cover' }}></div>
    );
}

