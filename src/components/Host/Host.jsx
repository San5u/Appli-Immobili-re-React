import React from "react";

function Host(props) {
    return (
        <div className="host-info">
            <div className="host-name text-rose">          
                {props.host.name.split(' ').map((word, index) => (  //Permet la séparation d'une chaîne de caractère en plusieurs mots
                    <span key={index}>{word}</span>       
                ))}
            </div>
            <img className="host-portrait"src={props.host.picture} alt="Portait du propiètaire"/>
        </div>
    );
};

export default Host;

