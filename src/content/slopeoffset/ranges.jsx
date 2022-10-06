import { LabelledRange } from "../../components/labelledrange";

export function SlopeOffsetRanges({run, rise, height, setRun, setHeight}) {
  return (
    <div className='flex w-full'>
      <div className='flex-shrink px-1'>
        <LabelledRange
          id='runrange'
          label={`Slope: ${run}:${rise}`}
          value={run}
          set={{ min: '1', max: '12', step: '0.5' }}
          func={() => {
            setRun(document.getElementById('runrange').value);
          }}
        />
      </div>
      <div className=''> </div>
      <div className='flex-grow px-1'>
        <LabelledRange
          id='heightrange'
          label={`Height: ${height}`}
          value={height}
          set={{ min: '1', max: '10', step: '0.01' }}
          func={() => {
            setHeight(document.getElementById('heightrange').value);
          }}
        />
      </div>
    </div>
  );
}
