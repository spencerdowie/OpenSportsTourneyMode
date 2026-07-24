import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SelectorProps = {
  label?: string;
  options: { value: string; name: string }[];
  direction?: "hor" | "vert";
  multi?: boolean;
  boxes?: boolean;
  onChange: (selection: string, value: boolean) => void;
};

export default function Selector({
  label,
  options,
  direction = "hor",
  multi = false,
  boxes = false,
  onChange
}: SelectorProps) {
  const [selection, setSelection] = useState("");
  const [multiState, setMultiState] = useState<{ [option: string]: boolean }>(
    {}
  );

  function CheckBox(selected: boolean) {
    return (
      <MaterialDesignIcons
        name={selected ? "checkbox-marked" : "minus-box-outline"}
        size={34}
        color={styles.button.borderColor}
      />
    );
  }

  function ButtonStyle(boxes: boolean, isSelection: boolean) {
    return boxes
      ? [styles.button, styles.buttonBox]
      : [styles.button, isSelection && styles.buttonSelected];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={direction == "vert" ? styles.optionsVert : styles.options}>
        {options.map(({ value, name }) => (
          <Pressable
            key={value}
            style={ButtonStyle(boxes, selection == value)}
            onPress={() => {
              if (multi) {
                let newValue = !multiState[value];
                setMultiState({ ...multiState, [value]: newValue });
                onChange(value, newValue);
              } else {
                setSelection(value);
                onChange(value, true);
              }
            }}>
            {boxes && CheckBox(multi ? multiState[value] : selection == value)}
            <Text
              style={[
                styles.buttonText,
                selection == value && {
                  color: "#fff",
                  fontWeight: "bold"
                }
              ]}>
              {name}
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
    marginTop: 10,
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
  optionsVert: {
    gap: 10,
    width: "100%",
    height: "auto",
    marginVertical: 30
  },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#13732F",
    borderWidth: 2,
    borderRadius: 5,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0
  },
  buttonSelected: {
    backgroundColor: "#13732F"
  },
  buttonBox: {
    justifyContent: "flex-start",
    gap: 20,
    paddingLeft: 18,
    minHeight: 60
  },
  buttonText: {
    color: "#13732F",
    textAlign: "center",
    fontSize: 16
  }
});
