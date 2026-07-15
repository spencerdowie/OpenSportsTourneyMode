import { Pressable, StyleSheet, Text, View } from "react-native";

type SelectorProps = {
  label: string;
  options: string[];
  style?: "dark" | "light";
};

export default function Selector({
  label,
  options,
  style = "dark"
}: SelectorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.options}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={
              style == "dark"
                ? styles.buttonDark
                : [styles.buttonDark, styles.buttonLight]
            }>
            <Text
              style={
                style == "dark"
                  ? styles.buttonDarkText
                  : [styles.buttonDarkText, styles.buttonLightText]
              }>
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 350,
    gap: 10
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 21,
    width: "100%",
    height: 45
  },
  buttonDark: {
    borderRadius: 5,
    backgroundColor: "#13732F",
    height: "100%",
    justifyContent: "center",
    flexGrow: 1,
    flexBasis: 0
  },
  buttonLight: {
    backgroundColor: "white",
    borderColor: "#13732F",
    borderWidth: 2
  },
  buttonDarkText: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  },
  buttonLightText: {
    color: "#13732F"
  }
});
