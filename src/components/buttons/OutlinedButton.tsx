import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OutlinedButton = ({
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
export default OutlinedButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 14,
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.button,
  },
});
