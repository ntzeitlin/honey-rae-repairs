/* eslint-disable react/prop-types */
import "./User.css"
export const User = ({ userObj }) => {
    return (
        <div className="user">
            <div>
                <div>Name: </div>
                <div className="user-info">{userObj.fullName}</div>
            </div>
            <div>
                <div>Email:</div>
                <div className="user-info">{userObj.email}</div>
            </div>
        </div>
    )
}