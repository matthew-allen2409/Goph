import React, { useState } from "react";

function CreateEvent() {
    const [activity, setActivity] = useState('');
    const [info, setInfo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newEvent = {
            "activity": activity,
            "info": info,
            "user_num": 17,
        };
        fetch("/api/create_event", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(newEvent)
        });
    }


    return (
        <div className="signupContainer">
            <div className="signupHead">
                <h1>Create Activity</h1>
            </div>
            <form className="login--form" onSubmit={handleSubmit}>
                <label>
                    Activity:
                    <input
                        type="text"
                        value={activity}
                        onChange={e => setActivity(e.target.value)}
                    />
                </label>
                <label>
                    Additional info
                    <textarea
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
                    className="button--submit"
                />
            </form>
        </div>
    )
}

export default CreateEvent