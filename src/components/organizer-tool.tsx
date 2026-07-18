import MaterialDesignIcons, {
    MaterialDesignIconsIconName
} from "@react-native-vector-icons/material-design-icons";
import { Pressable, Text, View } from "react-native";

type ToolProps = {
  icon: MaterialDesignIconsIconName;
  name: string;
  description: string;
  actionName: string;
  actionPress: () => void;
};

export default function OrganizerTool({
  icon,
  name,
  description,
  actionName,
  actionPress
}: ToolProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialDesignIcons name={icon} size={34} />
      <>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </>
      <Pressable
        style={{ marginLeft: "auto", marginRight: 10 }}
        onPress={actionPress}>
        <Text>{actionName}</Text>
      </Pressable>
    </View>
  );
}
