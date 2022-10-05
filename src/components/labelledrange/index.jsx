export function LabelledRange({ label, value, id, func, set }) {
  return (
    <div>
      <label>{label}</label>
      <div className='relative pt-1'>
        <input
          type='range'
          value={value}
          className=' form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none'
          id={id}
          min={set.min}
          max={set.max}
          step={set.step}
          onChange={func}
        />
      </div>
    </div>
  );
}
