import { IBookingFormikProps } from './Booking';
export interface IBookingInputProps {
  type: 'origin' | 'destination';
  formikProps: IBookingFormikProps;
  label: string;
  onChange?: ((value: string) => void) | ((value: string) => Promise<void>);
}
