export interface IBookingButtonProps {
  disabled: boolean;
  text: string;
  onPress?: (() => void) | (() => Promise<void>);
}
