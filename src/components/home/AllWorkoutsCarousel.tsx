import { FlatList, StyleSheet, Text, View } from "react-native";
import WorkoutWidget from "../widgets/WorkoutWidget";

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

const AllWorkoutsCarousel = () => {
  return (
    <FlatList
      data={workouts}
      renderItem={({ item }) => <WorkoutWidget />}
      keyExtractor={(item) => item.key.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};
export default AllWorkoutsCarousel;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 16,
  },
});
