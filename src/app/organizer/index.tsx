import Button from "@/components/button";
import OrganizerPanel from "@/components/organizer-panel";
import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <PageHeader title="Humber Pickleball Tournament" subtitle={"Organizer"} />
      <View style={{ alignItems: "center", width: "100%" }}>
        <OrganizerPanel
          mainText="21/24"
          subText="Checked-in"
          messageText="Check-in closes in 20 min"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%"
          }}>
          <OrganizerPanel mainText="3" subText="Missing" />
          <OrganizerPanel mainText="4" subText="Waitlist" />
        </View>
      </View>
      <Button
        type="warn"
        onPress={() => router.navigate("/organizer/checkin-manager")}>
        Check-in Players
      </Button>
      <Button
        type="error"
        onPress={() => router.navigate("/organizer/command-centre")}>
        Command Centre
      </Button>
      <Button disabled>Schedule Round 1</Button>
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
  panelGrid: { gap: 20 }
});
