import React, {useState, useEffect} from "react";

function Userinfo() {
    const [userData, setUserData] = useState({firstName: 'Adam', lastName: 'Nawałka'});

    useEffect(() => {
        setUserData({firstName: 'Filip', lastName: 'Nosacz'});
    }, []);

    return (
        <p>{userData.firstName} {userData.lastName}</p>
    )
}

export default Userinfo