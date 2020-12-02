import React from "react";

// Using container to allow easier use with Bootstrap
export function Container({ fluid, children }) {
    return <div className={`container${ fluid ? "-fluid" : ""}`}>{ children }</div>;
}

// Row component allows use of bootstrap row without class names
export function Row({ fluid, children }) {
    return <div className={`row${ fluid ? "-fluid" : ""}`}>{ children }</div>;
}

// Col component sizes columns with less syntax
export function Col({ size,children }) {
    return (
        <div 
            className = { size
                .split(" ")
                .map( size => "col-" + size )
                .join(" ")
        }>
            { children }
        </div>
    );
}