import React, { useRef, useState } from 'react';
import { ChevronOpen, ChevronClosed } from '../../content/icons/Chevrons';

export function Accordian({ title, content, children }) {
  const [isOpened, setIsOpened] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentElement = useRef(null);

  const handleOpen = () => {
    setIsOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
  };

  return (
    <div id='accordian' className='w-auto mx-10'>
      <div
        id='accordian-title'
        className='bg-gray-500 p-4 rounded-md flex justify-between text-white transition all hover:bg-gray-600 hover:ring-4 hover:ring-gray-300 active:bg-gray-700 active:ring-8 active:ring-gray-400'
        onClick={handleOpen}
      >
        {title}
        {isOpened ? <ChevronOpen /> : <ChevronClosed />}
      </div>
      <div
        id='accordian-content'
        ref={contentElement}
        style={{ height: height }}
        className='overflow-hidden transition-all duration-200'
      >
        {children}
      </div>
    </div>
  );
}
