import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProgressIndicatorProps {
  type: "featured" | "explore" | "explore-first" | "detail";
  collected: number;
  goal: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  type,
  collected,
  goal,
}) => {
  const percentage = Math.min((collected / goal) * 100, 100);

  return (
    <View
      style={styles.container}
      className={`${
        type != "featured" && type != "detail" ? "flex flex-row gap-2 items-center " : ""
      }`}
    >
      <View style={styles.progressContainer} className="grow">
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
      </View>
      {type == "detail" ? (
        <Text style={styles.text} className="text-[#3bc4cd]">
          Rp {collected.toLocaleString()} collected out of Rp{" "}
          {goal.toLocaleString()}
        </Text>
      ) : type == "featured" ? (
        <View className={`flex justify-between flex-row`}>
          <Text style={styles.text} className="text-black">
            Rp {collected.toLocaleString()}
          </Text>
          <Text style={styles.text} className="text-black">
            Rp {goal.toLocaleString()}
          </Text>
        </View>
      ) : (
        <View className="w-fit">
          <Text style={styles.text} className="text-black">
            {percentage}%
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 12,
    width: "100%",
  },
  progressContainer: {
    height: 8,
    backgroundColor: "#d9d9d9",
    borderRadius: 25,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#49ccb4",
    borderRadius: 25,
  },
  text: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
});

export default ProgressIndicator;
