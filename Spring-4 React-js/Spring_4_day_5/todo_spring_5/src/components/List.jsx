
import React from "react";
function List(props){
    const{taskArr} = props;
      return (
        <div className="list">
            <ul>
              {/* <li>TOdo1</li>
              <li>TOdo2</li>
              <li>TOdo3</li>
              <li>TOdo4</li> */}
              {taskArr.map((item)=>{
                return <li>{item}</li>
              })}
            </ul>
            
          </div>
      );
    }

    export default List;