import React, { useState } from 'react';
import '../Shared/Artboard.css';

const Artboard = () => {

    const [items, setItems] = useState([]);

    const handleDrag = e => {
        const {clientX, clientY} = e;
        setItems([...items, {x:clientX, y:clientY}]);
      };

    return (
        <div className='flex justify-center items-center'>
            <div className='mx-12'>
            <h2 className='font-bold text-2xl'>Drag here to draw something</h2>
            </div>
            <div className="canvas my-10" draggable onDrag={handleDrag}>
            {items.map(item => (
        <div className="test"
          style={{ left: `${item.x-5}px`, top: `${item.y-5}px` }}></div>
      ))}
            </div>
        </div>
    );
};

export default Artboard;