import React, { useState } from 'react';
import "./ListItem.css";

const ListItem = ({id, name, department, data, isActive}) => { 
    const [detailId, setDetailId] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = (id) => {
        setDetailId(id)
        setIsVisible(p => !p)
        isActive(true)
    }
    
    const detailItem = detailId
        ? (data
        .filter((employee) => employee.id === detailId)
        .map((item, index) => 
            <div key={index}>
                <div>age: <span>{item.age} years</span></div>
                <div>start of empl: <span>{item.startDate}</span></div>
                <div>end of empl: <span>{item.endDate?? "employed"}</span></div>
            </div>)) 
        : null;

    return(
        <>
            <td>{id}</td>
            <td className="item-detail" onClick={() => handleClick(id)}>
                <div className="wrapper">
                    <div className="title-wrapper">
                        <div className="title">{name}</div>
                    </div>
                    <div 
                        className={isVisible? "content active-content" : "content" }
                    >
                        {isVisible && id === detailId ? detailItem : null}
                    </div>
                </div>
            </td>
            <td>{department}</td>
        </>
    )
};

export default ListItem;