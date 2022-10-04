function Pill({ text, func }) {
  return (
    <div className='navbar-icon' onClick={func}>
      <div className='topbar-text'>{text}</div>
    </div>
  );
}

export default function PillBar({ textArray, func }) {
  return (
    <div className='navbar-main'>
      {textArray.map((pill) => {
        return <Pill text={pill} func={func} />;
      })}
    </div>
  );
}
