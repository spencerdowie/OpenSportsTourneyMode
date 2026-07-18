import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text
} from "react-native";

interface ButtonProps extends React.PropsWithChildren {
  onPress?: (event: GestureResponderEvent) => void;
  type?: "dark" | "light" | "warn" | "error";
  disabled?: boolean;
}

export default function Button({
  children,
  onPress = () => {},
  type = "dark"
}: ButtonProps) {
  function GetStyle() {}
  return (
    <Pressable
      style={() => {
        switch (type) {
          case "dark":
            return styles.buttonDark;
          case "light":
            return styles.buttonLight;
          case "warn":
            return styles.buttonWarn;
          case "error":
            return styles.buttonError;
        }
      }}
      onPress={onPress}>
      <Text
        style={
          type == "light"
            ? [
                styles.buttonText,
                {
                  color: "#13732F"
                }
              ]
            : styles.buttonText
        }>
        {children}
      </Text>
    </Pressable>
  );
}
const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    width: 350,
    height: 60,
    justifyContent: "center"
  }
}).button;
const buttonTextStyle = {};
const styles = StyleSheet.create({
  buttonDark: {
    ...buttonStyle,
    backgroundColor: "#13732F"
  },
  buttonLight: {
    ...buttonStyle,
    borderColor: "#13732F",
    borderWidth: 2
  },
  buttonWarn: {
    ...buttonStyle,
    backgroundColor: "#C88C2C"
  },
  buttonError: {
    ...buttonStyle,
    backgroundColor: "#A10000"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonLightText: {
    color: "#13732F"
  }
});
