import Button from "@/components/button";
import Selector from "@/components/selector";
import StatusBox from "@/components/status-box";
import TextInput from "@/components/text-input";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Registration() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text>{"<"}</Text>
      </Pressable>
      <Text>Humber Tournament Open</Text>
      <Text>Organizer</Text>
      <Text>Join Tournament</Text>
      <Text>Step 1 of 2</Text>
      <StatusBox title="Scan Confirmed" detail="You're joining as a guest" />
      <TextInput label="Firstname or nickname" placeholder="e.g. Bob" />
      <Selector
        label="Experience Level"
        style="light"
        options={["New", "Casual", "Skilled"]}
      />
      <Button text="Next" />
      <Button style="light" text="I already have an account" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto",
    gap: 10
  }
});
