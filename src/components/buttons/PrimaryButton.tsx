import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({
  customStyle,
  children,
  ...props
}: IPrimaryButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.buttonContainer, customStyle]}>
      {children}
    </TouchableOpacity>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 14,
    backgroundColor: Colors.button,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
