// import {digits, operators} from '@/Data/data'
// import Button from '../Button'
// const Keyboard = ( {onClick}:{onClick:(value: string)=> void}) => {
//     return(
//         <div>
//           {digits.map((digit)=><Button  label={digit}onClick={onClick}>{digit}</Button>)}
//           {operators.map((operator)=><Button label={operator}onClick={onClick}>{operator}</Button>)}
//         </div>
//     )
// }

// export default Keyboard

import { digits, operators } from '@/Data/data'
import Button from '../Button'

const Keyboard = ({ onClick }: { onClick: (value: string) => void }) => {
  return (
    <div className='grid grid-cols-3 gap-2 border-2 p-4 rounded max-w-3xs mx-auto' >
      {digits.map((digit, index) => (
        <Button key={index} label={digit} onClick={onClick} />
      ))}
      {operators.map((operator) => (
        <Button key={operator} label={operator} onClick={onClick} />
      ))}
    </div>
  )
}

export default Keyboard
