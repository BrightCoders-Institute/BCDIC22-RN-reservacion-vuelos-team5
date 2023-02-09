// Interfaces
import { IBookingFormikProps } from './Booking';
export interface IBookingPickerProps {
  formikProps: IBookingFormikProps;
}
export interface IBookingPickerState {
  options: string[];
  selected: number;
}
