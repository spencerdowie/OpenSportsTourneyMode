import { TextInput as RNTextInput, StyleSheet, Text, View } from "react-native";

type TextInputProps = {
  label: string;
  placeholder?: string;
};

export default function TextInput({ label, placeholder }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.inputBox}
        placeholder={placeholder}></RNTextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 350,
    marginTop: 10,
    gap: 10
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    height: 50,
    width: "100%",
    textIndent: "10px"
  }
});
