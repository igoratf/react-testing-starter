import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test('on initial render, the pay button is disabled', async () => {
   const mockProps = {
      sender: {id: '5'}, receiver: {id: '3'},
   }
   render(<TransactionCreateStepTwo {...mockProps}/>);

   expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
});

test('if an amount and note is entered, the pay button becomes enabled', async () => {
   const mockProps = {
      sender: {id: '5'}, receiver: {id: '3'},
   }
   render(<TransactionCreateStepTwo {...mockProps}/>);

   userEvent.type(screen.getByPlaceholderText(/amount/i), '10');
   userEvent.type(screen.getByPlaceholderText(/add a note/i), 'note');

   expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
});