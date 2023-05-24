import React from "react"

import { Link } from "react-router-dom";

const Index = () => {
    const accessToken = window.localStorage.getItem('sessionToken') ? window.localStorage.getItem('sessionToken') : false

    const logout = (e) => {
        window.localStorage.removeItem('sessionToken');
        window.location.reload();
    }
    const logoutresult = "Logout"


    return (
        <>
            <img style={{ width: "50px", height: "50px", borderRadius: "50px" }} src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" alt="s" />
            <button className="btn btn-primary mx-3" onClick={logout}>{logoutresult}</button>
        </>
    )

}

const DefaultSet = () => {

    return (
        <>
            <Link to="/login" >Вход</Link >
            <span className="chiziq">
                |
            </span>
            <Link to="/login"  >Регистрация</Link>
        </>
    )
}
export { Index, DefaultSet }


