import Colors from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

const ExcersiceWidget = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require("@/assets/content/bench_press.jpg")}
        style={styles.image}
      />
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Press Banca</Text>
        <Text style={styles.description}>RM: 110kg</Text>
        <Text style={styles.description}>Ultimo peso: 100kg</Text>
      </View>
    </View>
  );
};
export default ExcersiceWidget;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.tint,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 22,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
  },
  description: {
    fontSize: 12,
    color: Colors.secondText,
  },
  content: {
    alignItems: "center",
    padding: 10,
  },
});
