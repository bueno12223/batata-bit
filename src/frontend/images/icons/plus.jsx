import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width='2em'
      height='2em'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path d='M12 23a10 10 0 100-20 10 10 0 000 20z' fill='#FFC145' />
      <path d='M12 9v8m-4-4h8' stroke='#404040' />
    </svg>
  );
}

export default SvgComponent;
