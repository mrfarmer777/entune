import { render, screen, fireEvent } from '@testing-library/react';
import GameControls from './GameControls';



describe('changing the app settings', ()=>{
    test('Renders the game controls', () => {
      render(<GameControls />);
      const linkElement = screen.getByText(/Level/);
      expect(linkElement).toBeInTheDocument();
    });

    test('calls its handlers when values are charged', ()=>{
        const mockHandler = jest.fn(x => x)
        const {container} = render(<GameControls level={1} handleChangeLevel={mockHandler}/>);
        const input = container.querySelector('input[type="range"]')

        expect(input.value).toBe("1")
        fireEvent.change(input, {target: {value: 5}})
        expect(mockHandler).toBeCalled()

    })

})
