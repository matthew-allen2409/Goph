import React from "react";

function userCard(props) {


    return (
    <div className="userCard">
        <div className="card--user">
            <img 
                src={require(`../img/${props.img}`)}
                className="cardImg"
                alt="user"
            />
            <h4 className="card--username">{props.userName}</h4>
        </div>
        <div className="card--info">
            <h3 className="card--activity">{props.activity}: </h3>
            <p>{props.additionalInfo}</p>
        </div>
    </div>
    )
}

export default userCard