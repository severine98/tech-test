import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookIcon,
  BulletPoint,
} from "./src/components";
import { BulletPointType } from "./src/globalTypes";
import { CustomModal } from "./src/screens";
import { colors, spacing } from "./src/styles";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const sentences: BulletPointType = [
    "Understand what patterns drive your anxiety",
    "Learn validated tools to change those patterns",
    "Practice reducing anxiety in a safe space",
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.absoluteFillObject}
        accessibilityLabel="gradient background"
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
      {modalVisible && (
        <BlurView intensity={10} style={styles.absoluteFillObject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.base,
    paddingTop: 100,
    paddingBottom: spacing.base,
  },
  absoluteFillObject: {
    ...StyleSheet.absoluteFillObject,
  },
  blurContainer: {
    padding: 20,
    borderWidth: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: spacing.baseLarge,
  },
  text: {
    backgroundColor: "red",
    padding: 10,
    color: "white",
    marginTop: 60,
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
});
