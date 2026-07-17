import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text
} from "react-native";

type ButtonProps = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: "dark" | "light";
};

export default function Button({
  text,
  onPress = () => {},
  style = "dark"
}: ButtonProps) {
  return (
    <Pressable
      style={
        style == "dark"
          ? styles.buttonDark
          : [styles.buttonDark, styles.buttonLight]
      }
      onPress={onPress}>
      <Text
        style={
          style == "dark"
            ? styles.buttonDarkText
            : [styles.buttonDarkText, styles.buttonLightText]
        }>
        {text}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonDark: {
    borderRadius: 5,
    backgroundColor: "#13732F",
    width: 350,
    height: 60,
    justifyContent: "center"
  },
  buttonLight: {
    backgroundColor: "white",
    borderColor: "#13732F",
    borderWidth: 2
  },
  buttonDarkText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonLightText: {
    color: "#13732F"
  }
});
