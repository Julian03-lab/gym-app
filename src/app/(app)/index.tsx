import FlatButton from "@/components/buttons/FlatButton";
import AllWorkoutsCarousel from "@/components/home/AllWorkoutsCarousel";
import ExcercisesCarousel from "@/components/home/ExcersicesCarousel";
import LastWorkoutWidget from "@/components/widgets/LastWorkoutWidget";
import Colors from "@/constants/Colors";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Greeting */}
        <View style={[styles.padding, styles.imageContainer]}>
          <Image style={styles.image} src="https://picsum.photos/200/300" />
          <View>
            <Text style={styles.profileTitle}>Que bueno verte,</Text>
            <Text style={styles.profileSubtitle}>Juan!</Text>
          </View>
        </View>
        {/* Title */}
        <Text style={[styles.padding, styles.title]}>Que entrenaras hoy?</Text>
        {/* Choose workout */}
        <View style={[styles.padding]}>
          <Text style={styles.sectionText}>Tipo de entrenamiento</Text>
          <View style={styles.typeButtonContainer}>
            <FlatButton>Rutina</FlatButton>
            <FlatButton>Manual</FlatButton>
          </View>
        </View>
        {/* All workouts */}
        <View>
          <Text style={[styles.padding, styles.sectionText]}>
            Todas las rutinas
          </Text>
          <AllWorkoutsCarousel />
        </View>
        {/* Last workout */}
        <View style={[styles.padding]}>
          <Text style={styles.sectionText}>Ultimo entrenamiento</Text>
          <LastWorkoutWidget />
        </View>
        {/* Top excercises */}
        <View>
          <Text style={[styles.padding, styles.sectionText]}>
            Ejercicios destacados
          </Text>
          <ExcercisesCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 16,
  },
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    paddingVertical: 20,
    gap: 20,
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    fontFamily: "NewYorkMediumRegular",
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.text,
    marginBottom: 8,
  },
  typeButtonContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  image: {
    aspectRatio: 1,
    width: 44,
    borderRadius: 100,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 14,
    fontWeight: "semibold",
    color: Colors.text,
  },
  profileSubtitle: {
    fontSize: 22,
    color: Colors.text,
    fontFamily: "NewYorkMediumBold",
  },
});
