import React from "react"
import PropTypes from "prop-types"
import styles from "./view.module.css"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    container: {
        padding: "10px",
        margin: "30px"
    }
})

const View = ({ title, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.container} >
            <div className="w-full bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">
                <div className="w-1/3"></div>
                <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 md:mx-24 lg:mx-64">
                    <h1 className="text-lg font-bold">{title}</h1>

                    <div className="my-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}


View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View
