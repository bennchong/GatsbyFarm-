import React from "react"
import { useState} from "react"
import { Link, navigate } from "@reach/router"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import useFirebase from "../../utils/useFirebase";

export default () => {

    const firebase = useFirebase();

  let details;
  if (!isLoggedIn()) {
    details = (
      <p className="text-right px-5">
        <Link to="/"><u>Log in</u></Link>
      </p>
    )
  } else {
    const { displayName, email } = getUser()
    details = (
      <p className="text-right px-5">
        Logged in as {displayName} ({email}
        )
        {` `}
        <a href="/" onClick={event => { event.preventDefault(); logout(firebase).then(() => navigate(`/`)) }}>
          <u>log out</u>
        </a>
      </p>
    )
  }

  return <div>{details}</div>
}
