import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import { StyleSheet, Text, View } from "react-native";

type StatusProps = {
  title: string;
  detail: string;
  type?: "confirm" | "wait" | "status";
};

export default function StatusBox({
  title,
  detail,
  type = "status"
}: StatusProps) {
  function GetIcon() {
    switch (type) {
      case "confirm":
        return (
          <MaterialIcons
            name="check-circle-outline"
            size={34}
            color={styles.statusConfirmText.color}
          />
        );
      case "wait":
        return (
          <MaterialIcons
            name="clock-outline"
            size={34}
            color={styles.statusWaitText.color}
          />
        );
      default:
        return null;
    }
  }
  const typeStyle = [];
  typeStyle.push(styles.statusBase);
  switch (type) {
    case "confirm":
      typeStyle.push(styles.statusConfirm);
      break;
    case "wait":
      typeStyle.push(styles.statusWait);
      break;
  }
  const textStyle = [];
  textStyle.push(styles.statusBaseText);
  switch (type) {
    case "confirm":
      textStyle.push(styles.statusConfirmText);
      break;
    case "wait":
      textStyle.push(styles.statusWaitText);
      break;
  }

  return (
    <View style={typeStyle}>
      {GetIcon()}
      <View style={{ maxWidth: "100%" }}>
        <Text style={textStyle}>{title}</Text>
        <Text
          style={[styles.detailText, type == "status" ? { fontSize: 16 } : {}]}>
          {detail}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBase: {
    borderRadius: 5,
    borderWidth: 2,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#646464",
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  statusConfirm: {
    height: 60,
    borderColor: "#13732F",
    paddingVertical: 10
  },
  statusWait: {
    height: 60,
    borderColor: "#3E73AA",
    paddingVertical: 10
  },
  statusBaseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  },
  statusConfirmText: {
    color: "#13732F"
  },
  statusWaitText: {
    color: "#3E73AA"
  },
  detailText: {
    fontSize: 14,
    color: "#646464",
    maxWidth: "auto"
  }
});
