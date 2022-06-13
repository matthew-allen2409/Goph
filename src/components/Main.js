import React from 'react'

import UserCard from './userCard'
import Data from '../data/data.json'

function Main() {
    const [activeList, setActiveList] = React.useState(Data.users);


    const currUsers = activeList.map(user => {
        return (
            <UserCard
                img={user.img}
                activity={user.activity}
                userName={user.userName}
                additionalInfo={user.additionalInfo}
            />
        )
    })


    return (
        <div className='main'>
            {currUsers}
        </div>
    )
}

export default Main