import { Text, View } from "react-native";

interface TitledSectionProps extends React.PropsWithChildren {
  title: string;
}
export default function TitledSection({ title, children }: TitledSectionProps) {
  return (
    <>
      <View id="title">
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <br />
      </View>
      {children}
    </>
  );
}
