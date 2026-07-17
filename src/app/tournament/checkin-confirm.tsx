import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import { StyleSheet, View } from "react-native";

export default function ConfirmCheckin() {
  return (
    <View style={styles.container}>
      <PageHeader title="Humber Tournament Open" subtitle="Organizer" />

      <PageHeader title="You're Checked In!" subtitle="Status: Match-Ready" />
      <StatusBox
        type="confirm"
        title="You're In!"
        detail="Waiting for Round 1 assignment"
      />
      <StatusBox title="Player Card" detail="Bob | Casual | Need Partner: No" />
      <StatusBox
        title="Next update appears here"
        detail="Court, team, start time, and any organizer messages."
      />
      <Button text="Get the app" style="light" />
      <Button text="Go to Player Dashboard" />
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
