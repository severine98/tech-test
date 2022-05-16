import { StyleSheet, Text, View } from "react-native";
import { Background, BookIcon, BulletPoint } from "./src/components";
import { colors, spacing } from "./src/styles";

export default function App() {
  const sentences = [
    "Understand what patterns drive your anxiety",
    "Learn validated tools to change those patterns",
    "Practice reducing anxiety in a safe space",
  ];
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Text style={styles.title}>To reach this goal, we will:</Text>
      <BulletPoint sentences={sentences} />
      <View style={styles.learningCard}>
        <BookIcon style={styles.book} />
        <Text>What will I learn?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.base,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: spacing.base,
  },
  learningCard: {
    backgroundColor: colors.white,
    padding: spacing.baseSmall,
    marginHorizontal: spacing.base,
    borderRadius: 12,
    flexDirection: "row",
  },
  book: {
    marginRight: spacing.base,
  },
});
