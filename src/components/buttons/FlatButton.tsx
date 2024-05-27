import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FlatButton = ({ children, ...props }: IFlatButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
export default FlatButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: Colors.tint,
    flex: 1,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
