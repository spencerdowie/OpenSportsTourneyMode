import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import { StyleSheet, Text, View } from "react-native";

type StatusProps = {
  title: string;
  detail: string;
  style?: "confirm" | "wait";
};

export default function StatusBox({
  title,
  detail,
  style = "confirm"
}: StatusProps) {
  return (
    <View
      style={
        style == "confirm"
          ? styles.statusConfirm
          : [styles.statusConfirm, styles.statusWait]
      }>
      {style == "confirm" ? (
        <MaterialIcons
          name="check-circle-outline"
          size={34}
          color={styles.statusConfirmText.color}
        />
      ) : (
        <MaterialIcons
          name="clock-outline"
          size={34}
          color={styles.statusWaitText.color}
        />
      )}
      <View>
        <Text
          style={
            style == "confirm"
              ? styles.statusConfirmText
              : [styles.statusConfirmText, styles.statusWaitText]
          }>
          {title}
        </Text>
        <Text style={styles.detailText}>{detail}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  statusConfirm: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#13732F",
    width: 350,
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  },
  statusWait: {
    borderColor: "#3E73AA"
  },
  statusConfirmText: {
    color: "#13732F",
    fontSize: 16
  },
  statusWaitText: {
    color: "#3E73AA"
  },
  detailText: {
    fontSize: 14,
    color: "#646464"
  }
});
