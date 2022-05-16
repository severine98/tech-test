import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Image,
  Pressable,
} from "react-native";
import {
  ArrowLeftIcon,
  BookIcon,
  BulletPoint,
  CrossIcon,
  ArrowRightIcon,
} from "./src/components";
import { colors, spacing, widthPct } from "./src/styles";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const sentences = [
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
        <Modal transparent={true} visible={modalVisible} animationType={"fade"}>
          <View style={styles.modal}>
            <Pressable onPress={() => setModalVisible(false)}>
              <CrossIcon style={{ alignSelf: "flex-end" }} />
            </Pressable>
            <BookIcon
              style={{ alignSelf: "center", marginBottom: spacing.base }}
            />
            <View style={styles.seperationLine} />
            <Image
              style={styles.yogaImage}
              accessibilityLabel="yoga pose"
              source={require("./assets/yoga.png")}
            />
          </View>
        </Modal>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.white,
    padding: spacing.baseSmall,
    marginHorizontal: spacing.base,
    borderRadius: 12,
    flexDirection: "row",
  },
  book: {
    marginRight: spacing.base,
  },
  modal: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: widthPct(20),
    marginHorizontal: widthPct(5),
    borderRadius: 12,
    padding: widthPct(5),
  },
  yogaImage: {
    width: 250,
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
    alignSelf: "center",
  },
  seperationLine: {
    width: "100%",
    backgroundColor: colors.lightGrey,
    height: 1,
    marginBottom: spacing.small,
  },
  arrowsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
