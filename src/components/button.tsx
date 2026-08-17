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
  type = "dark",
  disabled = false
}: ButtonProps) {
  return (
    <Pressable
      style={() => {
        if (disabled) return styles.buttonDisabled;

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
      onPress={disabled ? null : onPress}>
      <Text
        style={(() => {
          if (type == "light") return styles.buttonLightText;
          else if (disabled) return styles.buttonDisabledText;
          else return buttonTextStyle;
        })()}>
        {children}
      </Text>
    </Pressable>
  );
}
const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    height: 50,
    justifyContent: "center"
  }
}).button;
const buttonTextStyle = StyleSheet.create({
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
}).buttonText;
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
  buttonDisabled: {
    ...buttonStyle,
    backgroundColor: "lightgrey",
    borderColor: "grey",
    borderWidth: 2
  },
  buttonLightText: {
    ...buttonTextStyle,
    color: "#13732F"
  },
  buttonDisabledText: {
    ...buttonTextStyle,
    color: "grey"
  }
});
