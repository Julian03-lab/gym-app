import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";
import { Feather } from "@expo/vector-icons";
import OutlinedButton from "../buttons/OutlinedButton";

const LastWorkoutWidget = () => {
  return (
    <View style={styles.container}>
      {/* Day button */}
      <PrimaryButton
        disabled
        customStyle={{
          paddingHorizontal: 16,
          flex: 0,
        }}
      >
        <Text style={styles.dayText}>Mar</Text>
        <Text style={styles.dayNumberText}>16</Text>
      </PrimaryButton>

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <View>
          <Text style={styles.titleText}>Entrenamiento push</Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            6 Ejercicios
          </Text>
        </View>

        {/* Exercises */}
        <View>
          <Text style={styles.detailsText} numberOfLines={1}>
            Press banca - 40 kg
          </Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            Press banca - 40 kg
          </Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            Press banca - 40 kg
          </Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            ...
          </Text>
        </View>
      </View>

      <OutlinedButton
        customStyle={{
          paddingHorizontal: 16,
          flex: 0,
        }}
      >
        <Feather name="play" size={24} color={Colors.button} />
      </OutlinedButton>
    </View>
  );
};
export default LastWorkoutWidget;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.tint,
    borderRadius: 22,
    flexDirection: "row",
    gap: 16,
  },
  content: {
    justifyContent: "center",
    gap: 12,
    flex: 1,
  },
  titleText: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsText: {
    color: Colors.secondText,
    fontSize: 12,
  },
  dayText: {
    color: Colors.text,
    fontSize: 16,
    fontFamily: "NewYorkMediumRegular",
  },
  dayNumberText: {
    color: Colors.text,
    fontSize: 20,
    fontFamily: "NewYorkMediumSemibold",
  },
});
