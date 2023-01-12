import { PulseLoader } from 'react-spinners';

export const  Loading =  () => {
  return (
    <div className=' absolute top-0 left-0 right-0 bottom-[-1000px] bg-overlay-modal flex items-center justify-center z-[10000] '  > <PulseLoader size={12} margin={2} color={'#123abc'} loading={true} /></div>
  )
}

