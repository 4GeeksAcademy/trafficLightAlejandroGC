import React from "react";

const Light = ({color, isActive, onShow, purpleLight}) => {
    return (
        <button className={"light " + (purpleLight ? "light-4" : "light-3") + " border-0 rounded-circle bg-" + color + (isActive ? " selected" : "")} onClick={onShow}></button>
    )
}

export default Light;