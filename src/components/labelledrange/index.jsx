export function LabelledRange({ label, value, id, func }) {
  return (
    <div>
      <label>{label}</label>
      <div className='relative pt-1'>
        <input
          type='range'
          value={value}
          className=' form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none'
          id={id}
          min='0'
          max='2'
          step='0.01'
          onChange={func}
        />
      </div>
    </div>
  );
}
