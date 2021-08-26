import React from "react";
import '../styles/Child.css';

function Selection(props) {
    let [bgColor, setBgColor] = React.useState({backgorund:''}) ;
    const updateSelectionStyle = () => {
        props.applyColor(setBgColor) ;
    }
    return (
        <div className="fix-box" onClick={updateSelectionStyle} style={bgColor}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection;