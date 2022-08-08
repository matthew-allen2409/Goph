import React from 'react'

import UserCard from './UserCard'

function Main() {
    const [activeList, setActiveList] = React.useState(null);
    const [currUsers, setCurrUsers] = React.useState(null);

    React.useEffect(() => {
        fetch("api/open_activities")
        .then(res => res.json())
        .then(data => setActiveList(data));
    }, []);

    React.useEffect(() => {
        if (activeList) {
            setCurrUsers(activeList.map(user => {
                return (
                    <UserCard
                        img={user.img || "BigRig.jpg"}
                        activity={user.activity}
                        user={user.username}
                        userName={ (user.first_name && user.last_name) && `${user.first_name} ${user.last_name}` ||user.username}
                        additionalInfo={user.additional_info}
                    />
                )
            }))
        }
    }, [activeList])
    

    return (
        <div className='main'>
            {currUsers || "Loading..."}
        </div>
    )
}

export default Main
