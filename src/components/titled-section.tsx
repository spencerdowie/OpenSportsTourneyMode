import { Text, View, ViewStyle } from "react-native";

interface TitledSectionProps extends React.PropsWithChildren {
  title: string;
  style?: ViewStyle;
}
export default function TitledSection({
  title,
  style,
  children
}: TitledSectionProps) {
  return (
    <>
      <View
        id="title"
        style={{
          borderBottomWidth: 2,
          borderColor: "#E3E3E3",
          marginVertical: 15
        }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
      </View>
      <View style={style}>{children}</View>
    </>
  );
}
