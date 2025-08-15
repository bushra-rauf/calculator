import { digits, operators } from '@/Data/data'
import Button from '../Button'

const Keyboard = ({ onClick }: { onClick: (value: string) => void }) => {
  return (
    <div className='grid grid-cols-3 gap-2 border-2 p-4 rounded max-w-90 mx-auto' >
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
