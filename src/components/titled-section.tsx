import { Text, View } from "react-native";

interface TitledSectionProps extends React.PropsWithChildren {
  title: string;
}
export default function TitledSection({ title, children }: TitledSectionProps) {
  return (
    <>
      <View
        id="title"
        style={{
          borderBottomWidth: 2,
          borderColor: "#E3E3E3",
          marginVertical: 15
        }}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </View>
      {children}
    </>
  );
}
