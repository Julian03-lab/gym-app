import { FlatList, StyleSheet, Text, View } from "react-native";
import WorkoutWidget from "../widgets/WorkoutWidget";
import ExcersiceWidget from "../widgets/ExcersiceWidget";

const workouts = [
  {
    title: "Rutina de piernas",
    description: "Rutina de piernas para principiantes",
    image: "https://picsum.photos/200/300",
    key: 0,
  },
  {
    title: "Rutina de brazos",
    description: "Rutina de brazos para principiantes",
    image: "https://picsum.photos/200/300",
    key: 1,
  },
  {
    title: "Rutina de espalda",
    description: "Rutina de espalda para principiantes",
    image: "https://picsum.photos/200/300",
    key: 2,
  },
];

const ExcercisesCarousel = () => {
  return (
    <FlatList
      data={workouts}
      renderItem={({ item }) => <ExcersiceWidget />}
      keyExtractor={(item) => item.key.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};
export default ExcercisesCarousel;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 16,
  },
});
