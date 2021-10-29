import React from "react";

const NavLinks = ({
    display = false
}) => {
    if (display) {
        return (
            <div>
                <ul className="navbar-link">
                    <li className="nav-item">
                        <a className="nav-linkk"> HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-linkk"> HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-linkk"> HOME</a>
                    </li>
                </ul>

            </div>
        )
    } else {
        return null
    }


}

export default NavLinks;