import React from "react";
import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import { colors, spacing, widthPct } from "../styles";
import { BookIcon, CrossIcon } from "../components/svgs";

type CustomModalProps = {
  modalVisible: boolean;
  setModalVisible: () => void;
};

const CustomModal = ({ modalVisible, setModalVisible }: CustomModalProps) => {
  return (
    <Modal transparent={true} visible={modalVisible} animationType={"fade"}>
      <View style={styles.modal}>
        <Pressable onPress={setModalVisible}>
          <CrossIcon style={styles.crossIcon} />
        </Pressable>
        <BookIcon stroke={colors.lightGrey} style={styles.bookIcon} />
        <View style={styles.seperationLine} />
        <Image
          style={styles.yogaImage}
          accessibilityLabel="yoga pose"
          source={require("../../assets/plant.jpeg")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: widthPct(20),
    marginHorizontal: widthPct(5),
    borderRadius: 12,
    padding: widthPct(5),
  },
  seperationLine: {
    width: "100%",
    backgroundColor: colors.lightGrey,
    height: 1,
    marginBottom: spacing.small,
  },
  yogaImage: {
    width: 250,
    height: 350,
    borderRadius: 12,
    overflow: "hidden",
    alignSelf: "center",
  },
  crossIcon: {
    alignSelf: "flex-end",
  },
  bookIcon: {
    alignSelf: "center",
    marginBottom: spacing.base,
  },
});

export { CustomModal };
