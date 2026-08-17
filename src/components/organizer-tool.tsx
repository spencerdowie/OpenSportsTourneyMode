import MaterialDesignIcons, {
  MaterialDesignIconsIconName,
} from "@react-native-vector-icons/material-design-icons";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import Button from "./button";

type ToolProps = {
  icon: MaterialDesignIconsIconName;
  name: string;
  description: string;
  actionName: string;
  actionPress: () => void;
  warn?: boolean;
};

export default function OrganizerTool({
  icon,
  name,
  description,
  actionName,
  actionPress,
  warn,
}: ToolProps) {
  const style: ViewStyle[] = [styles.base];
  if (warn) style.push(styles.warn);
  return (
    <View style={style}>
      <MaterialDesignIcons
        name={warn ? "exclamation-thick" : icon}
        size={34}
        color={warn ? "#A10000" : "black"}
      />
      <View style={{ marginLeft: 16 }}>
        <Text
          style={
            warn
              ? { color: "#A10000", fontWeight: "bold" }
              : { color: "black", fontWeight: "bold" }
          }
        >
          {name}
        </Text>
        <Text>{description}</Text>
      </View>
      <Button
        type={warn ? "error" : "light"}
        onPress={actionPress}
        styleOverride={{
          marginLeft: "auto",
          marginRight: 10,
          width: 110,
          height: 38,
        }}
        textStyleOverride={{ fontSize: 14, fontWeight: "bold" }}
      >
        {actionName}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  base: { flexDirection: "row", alignItems: "center", marginVertical: 3 },
  warn: {
    borderColor: "#A10000",
    borderWidth: 2,
    borderRadius: 6,
  },
});
