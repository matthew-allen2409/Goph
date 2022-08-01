import React, { useState } from "react";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function CreateEvent() {
    const [activity, setActivity] = useState('');
    const [info, setInfo] = useState('');

    function handleSubmit(e) {
        // e.preventDefault();
        const newEvent = {
            "activity": activity,
            "info": info,
            "JWT": getCookie('JWT'),
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
                        required
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