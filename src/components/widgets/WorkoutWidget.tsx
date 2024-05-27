import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";
import { Feather } from "@expo/vector-icons";

const WorkoutWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          Entrenamiento push
        </Text>
        <Text style={styles.detailsText} numberOfLines={1}>
          6 Ejercicios
        </Text>
        <Text style={styles.detailsText} numberOfLines={1}>
          Sin dias asignados
        </Text>
      </View>
      <PrimaryButton>
        <Feather name="play" size={36} color={Colors.text} />
      </PrimaryButton>
    </View>
  );
};
export default WorkoutWidget;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: Colors.tint,
    borderRadius: 22,
    flexDirection: "row",
    gap: 12,
    width: 320,
  },
  content: {
    flex: 3,
    justifyContent: "center",
    gap: 0,
  },
  title: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsText: {
    color: Colors.secondText,
    fontSize: 14,
  },
});
