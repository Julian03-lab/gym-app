import type { TouchableOpacityProps, ViewStyle } from "react-native";

declare global {
  interface IFlatButtonProps extends TouchableOpacityProps {}

  interface IPrimaryButtonProps extends TouchableOpacityProps {
    customStyle?: ViewStyle;
  }
}
