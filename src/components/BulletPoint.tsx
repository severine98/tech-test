import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../styles";

type BulletPointProps = {
  //   sentences: readonly [string, string?, string?, string?, string?];
  sentences: string[];
};

export const BulletPoint = ({ sentences }: BulletPointProps) => {
  return (
    <View>
      {sentences.map((sentence, index) => {
        return (
          <View key={index} style={styles.container}>
            <View style={styles.circle}>
              <Text style={styles.bulletNumber}>{index + 1}</Text>
            </View>
            <Text style={styles.bulletText}>{sentence}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: spacing.base,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: colors.darkGrey,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.baseSmall,
  },
  bulletText: {
    color: colors.brown,
    flexShrink: 1,
    marginTop: spacing.tiniest,
    fontSize: 18,
  },
  bulletNumber: {
    color: colors.white,
  },
});
