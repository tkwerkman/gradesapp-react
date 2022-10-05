export function Pill({ text, func }) {
  return (
    <div className='pill-container' onClick={func}>
      <div className='pill-text'>{text}</div>
    </div>
  );
}

export function ExpandablePill({ text, children }) {
  return (
    <div className='pill-anim-wrapper group'>
      <div className='pill-container-noaction'>
        <div className='pill-text'>{text}</div>
      </div>
      <div className='pill-subbar'>{children}</div>
    </div>
  );
}

export function ExpandablePillChild({ text, func }) {
  return (
    <div className='pill-sub-container' onClick={func}>
      <div className='pill-sub-text'>{text}</div>
    </div>
  );
}

export default function PillBar({ children }) {
  return (
    <div className='pillbar'>
      {children}
    </div>
  );
}
