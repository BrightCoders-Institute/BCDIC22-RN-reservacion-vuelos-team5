export interface ISignUpFormButtonProps {
  disabled: boolean;
  isCommonLogging: boolean;
  text: string;
  onPress?: (() => void) | (() => Promise<void>);
}
