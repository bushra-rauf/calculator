import {render, screen} from '@testing-library/react'
import Keyboard from '.'


test ('All digit buttons renders on the screen', ()=> {
    render(<Keyboard onClick={()=>{}}/>)
    const button = screen.getAllByTestId('keyboard-button') 
    expect(button.length).toBe(11)
})

test('All operator buttons render on the screen', () => {
  render(<Keyboard onClick={()=> {}} />);
  const operatorButtons = screen.getAllByTestId('operator-button'); 
  expect(operatorButtons.length).toBe(7);
});