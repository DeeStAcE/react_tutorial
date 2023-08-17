import React, {useState} from "react";
import FakeAPI from "./data/fakeAPI.js";

function AccountData(props) {
    const [data, setData] = useState(false)

    FakeAPI.then(data => {
        // console.log(data)
        setData(data)
    });

    if (data) {
        return (
            <table>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Balance</th>
                    <th>Change</th>
                </tr>
                </thead>
                <tbody>
                {data.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{element.day}</td>
                            <td>{element.balance}</td>
                            <td>{element.change}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    } else {
        return null
    }

}

export default AccountData