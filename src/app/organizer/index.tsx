import Button from "@/components/button";
import OrganizerPanel from "@/components/organizer-panel";
import PageHeader from "@/components/page-header";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <PageHeader title="Humber Pickleball Tournament" subtitle={"Organizer"} />
      <View style={{ justifyContent: "space-between", flexGrow: 1 }}>
        <View style={{ alignItems: "center", width: "100%", flexGrow: 1 }}>
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
        <View style={{ flexGrow: 1, justifyContent: "space-between" }}>
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
          <View>
            <Button disabled>Schedule Round 1</Button>
            <Text style={{ color: "red" }}>
              <MaterialDesignIcons
                name="information-variant-circle"
                color="red"
                size={20}
              />
              Only enables once all the players are checked-in and issues are
              resolved.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto",
    paddingVertical: 20
  },
  panelGrid: { gap: 20 }
});
