import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookIcon,
  BulletPoint,
  CustomModal,
} from "./src/components";
import { ArrayMax5 } from "./src/globalTypes";
import { colors, spacing, widthPct } from "./src/styles";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const sentences: ArrayMax5 = [
    "Understand what patterns drive your anxiety",
    "Learn validated tools to change those patterns",
    "Practice reducing anxiety in a safe space",
  ];
  return (
    <View style={styles.blurredContainer}>
      <Image
        style={styles.backgroundImage}
        accessibilityLabel="yoga pose"
        source={require("./assets/background.png")}
      />
      <View style={{ flex: 1 }}>
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(false)}
        />
        <Text style={styles.title}>To reach this goal, we will:</Text>
        <BulletPoint sentences={sentences} />
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.learningCard}
        >
          <BookIcon style={styles.book} />
          <Text>What will I learn?</Text>
        </Pressable>
      </View>

      <View style={styles.arrowsContainer}>
        <ArrowLeftIcon />
        <View
          style={{
            backgroundColor: colors.orange,
            paddingHorizontal: spacing.base,
            paddingVertical: spacing.small,
            borderRadius: 54,
          }}
        >
          <ArrowRightIcon />
        </View>
      </View>
      {modalVisible && <BlurView intensity={10} style={styles.blurView} />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "red",
    padding: 10,
    color: "white",
    marginTop: 60,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    position: "absolute",
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.base,
    backgroundColor: "#fff",
    paddingTop: 100,
    paddingBottom: spacing.base,
  },
  blurredContainer: {
    flex: 1,
    paddingHorizontal: spacing.base,
    paddingTop: 100,
    paddingBottom: spacing.base,
    shadowOpacity: 1,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  title: {
    fontSize: 24,
    marginBottom: spacing.baseLarge,
  },
  learningCard: {
    marginTop: spacing.huge,
    padding: spacing.baseSmall,
    marginHorizontal: spacing.base,
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: colors.white,
    elevation: 3,
    shadowColor: "rgb(151, 151, 151)",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  book: {
    marginRight: spacing.base,
  },
  arrowsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blurContainer: {
    padding: 20,
    borderWidth: 5,
  },
});
