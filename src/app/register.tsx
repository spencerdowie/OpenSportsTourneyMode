import Button from "@/components/button";
import TextInput from "@/components/text-input";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text>{"<"}</Text>
      </Pressable>
      <Text>Sign Up</Text>
      <View style={styles.inputHolder}>
        <TextInput label="Name" />
        <TextInput label="Email or Phone" />
        <TextInput label="Password" />
      </View>
      <Text style={styles.forgotPassword}>Already have an account? Log In</Text>
      <Button
        text="Register"
        onPress={() => router.navigate("/tournament/registration")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto"
  },
  inputHolder: { gap: 25, width: "100%" },
  buttonHolder: {
    marginTop: 70,
    gap: 22
  },
  forgotPassword: {
    alignSelf: "flex-end"
  }
});
