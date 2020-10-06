import React from "react"
import PropTypes from "prop-types"
import styles from "./view.module.css"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    container: {
        margin: "30px",
        justifyContent: "center",
        alignItems: "center"
    },
    children: {
        display: "flex",
        flexDirection: "column",
    }
})

const View = ({ title, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.container} >
            <div className="w-full bg-gray-100 rounded pt-6 pb-8 mb-4">
                <div className="w-1/3"></div>
                <div className='bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex-column'>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <div className={classes.children}>
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
