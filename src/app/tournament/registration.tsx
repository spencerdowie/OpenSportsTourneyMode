import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import Selector from "@/components/selector";
import StatusBox from "@/components/status-box";
import TextInput from "@/components/text-input";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Registration() {
  const [regStep, setRegStep] = useState(1);

  function RegPage() {
    if (regStep == 1) {
      return (
        <View>
          <PageHeader
            title="Join Tournament"
            subtitle={`Step ${regStep} of 2`}
            backBtn={false}
          />
          <StatusBox
            title="Scan Confirmed"
            detail="You're joining as a guest"
          />
          <TextInput label="Firstname or nickname" placeholder="e.g. Bob" />
          <Selector
            label="Experience Level"
            options={["New", "Casual", "Skilled"]}
          />
          <Button text="Next" onPress={() => setRegStep(2)} />
          <Button style="light" text="I already have an account" />
        </View>
      );
    } else {
      return (
        <View>
          <PageHeader
            title="You're Ready"
            subtitle="Step 2 of 2"
            backBtn={false}
          />
          <StatusBox
            style="wait"
            title="Almost Done"
            detail="Tell the organizer what matters"
          />
          <Selector
            options={[
              "I brought gear",
              "I need a partner",
              "I'm leaving early",
              "I prefer casual play"
            ]}
            direction="vert"
            multi={true}
            boxes={true}
          />
          <Button text="Save & join event" />
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Humber Tournament Open" subtitle="Organizer" />
      {RegPage()}
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
