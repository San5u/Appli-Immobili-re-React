import React, { useState, useEffect } from "react";

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [shouldRender, setShouldRender] = useState(!isCollapsed); 
  

  useEffect(() => {
    if (!isCollapsed) {             
        setShouldRender(true);
      } else {                       
        setTimeout(() => {
          setShouldRender(false);
        }, 500);                      
      }
    }, [isCollapsed]);
    const animation =
    (props.cssClasses !== undefined ? props.cssClasses : "") +
    " collapse" +
    (isCollapsed ? " collapsed" : "");

  return (
    <div className={animation}>
      <div className="collapse-title text-white">
        {props.titre}
        <div className={`button-chevron ${!isCollapsed ? "rotated" : ""}`} onClick={() => setIsCollapsed(!isCollapsed)}>
          <div className="fa-solid fa-chevron-up"></div>
        </div>
      </div>
      {shouldRender && (       
        <div className={`collapse-content ${isCollapsed ? "hidden" : "visible"}`}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
