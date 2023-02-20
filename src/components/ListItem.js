import React, { useState } from 'react';
import './ListItem.css';

const ListItem = ({ id, name, department, data }) => {
  const [detailId, setDetailId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  const handleClick = (id) => {
    setDetailId(id);
    setIsVisible((p) => !p);
  };

  const detailItem = data
    .filter((employee) => employee.id === detailId)
    .map((item, index) => (
      <ul key={index} className={isVisible && id === detailId ? 'translate' : 'translate hidden'}>
        <li>
          age: <span>{item.age} years</span>
        </li>
        <li>
          start of empl: <span>{item.startDate}</span>
        </li>
        <li>
          end of empl: <span>{item.endDate ?? 'employed'}</span>
        </li>
      </ul>
    ));

  return (
    <>
      <td>{id}</td>
      <td className="item-detail" onClick={() => handleClick(id)}>
        {name}
        {detailItem}
      </td>
      <td>{department}</td>
    </>
  );
};

export default ListItem;
