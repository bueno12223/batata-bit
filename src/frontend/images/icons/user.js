import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width='1em'
      height='1em'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <mask
        id='prefix__a'
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={36}
        height={36}
      >
        <circle cx={18.2} cy={18.3} r={17.5} fill='#FFC145' />
      </mask>
      <g mask='url(#prefix__a)'>
        <path
          d='M29 37.9v-3.6c0-2-.6-3.7-1.6-5a4.9 4.9 0 00-3.8-2.2H12.7c-1.4 0-2.8.8-3.8 2.1a8.5 8.5 0 00-1.6 5V38'
          fill='#197BBD'
        />
        <path
          d='M18.2 21.7a5.4 5.4 0 100-10.8 5.4 5.4 0 000 10.8z'
          fill='#fff'
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
