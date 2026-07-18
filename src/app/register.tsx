import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import TextInput from "@/components/text-input";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Sign Up"
        subtitle="Step 1 of 1 : Player Account Access"
        backBtn={() => router.navigate("/")}
      />
      <View style={styles.inputHolder}>
        <TextInput label="Name" />
        <TextInput label="Email or Phone" />
        <TextInput label="Password" />
      </View>
      <Text style={styles.forgotPassword}>Already have an account? Log In</Text>
      <Button onPress={() => router.navigate("/tournament/registration")}>
        Register
      </Button>
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
