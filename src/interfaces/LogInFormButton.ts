export interface ILogInFormButtonProps {
  disabled: boolean;
  isCommonLogging: boolean;
  text: string;
  onPress?: (() => void) | (() => Promise<void>);
}
