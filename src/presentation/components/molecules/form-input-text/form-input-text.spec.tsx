import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { render, screen, setup, waitFor } from '../../../../../test/test-utils';
import { FormInputText } from './form-input-text';
import { FormInputType } from './form-input-text.types';

const defaultValues: FieldValues = {
  testInput: '',
};

interface TestWrapComponentProps {
  type?: FormInputType;
}

const TestWrapComponent = ({
  type = FormInputType.Text,
}: TestWrapComponentProps) => {
  const { control } = useForm({
    defaultValues,
  });

  return (
    <FormInputText
      name="testInput"
      label="Test Input Label"
      fControl={control}
      placeholder="Test Input Here"
      type={type}
      validations={{
        required: true,
        customErrorMsg: 'El campo es requerido',
      }}
    />
  );
};

describe('components:form-input-text', () => {
  test('It should render successfully', () => {
    const { getAllByText } = render(<TestWrapComponent />);

    expect(getAllByText('Test Input Label')[0]).toBeInTheDocument();
  });

  test('It should receive a value typing in the input', async () => {
    expect.hasAssertions();

    const { user } = setup(<TestWrapComponent />);

    await user.type(
      screen.getByPlaceholderText('Test Input Here'),
      'Some text typed in the input'
    );

    await waitFor(() => {
      expect(
        screen.queryByDisplayValue('Some text typed in the input')
      ).toBeVisible();
    });
  });

  //TODO: Add test for validations
});
