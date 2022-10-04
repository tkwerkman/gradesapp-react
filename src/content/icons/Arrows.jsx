export function UpArrow() {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 32'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12 2 L3 12 M12 2 L21 12 M12 2 L12 30'
      />
    </svg>
  );
}

export function DownArrow() {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 32'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12 30 L3 20 M12 30 L21 20 M12 30 L12 2'
      />
    </svg>
  );
}
