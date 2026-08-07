import Button from "@/components/button";
import OrganizerPanel from "@/components/organizer-panel";
import PageHeader from "@/components/page-header";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { checked, missing, waitlist } = useLocalSearchParams<{
    checked?: string;
    missing?: string;
    waitlist?: string;
  }>();
  const [numChecked, SetCheckedPlayers] = useState<number>(9);
  const [numMissing, SetMissingPlayers] = useState<number>(3);
  const [numWaitlist, SetWaitlistPlayers] = useState<number>(3);

  useEffect(() => {
    if (checked) SetCheckedPlayers(parseInt(checked));
    if (missing) SetMissingPlayers(parseInt(missing));
    if (waitlist) SetWaitlistPlayers(parseInt(waitlist));
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader title="Humber Pickleball Tournament" subtitle={"Organizer"} />
      <View style={{ justifyContent: "space-between", flexGrow: 1 }}>
        <View id="info-panel-holder" style={styles.infoPanelHolder}>
          <View style={styles.mainPanel}>
            <OrganizerPanel
              warn={numChecked < 24}
              mainText={`${numChecked}/24`}
              subText="Checked-in"
              messageText="Check-in closes in 20 min"
            />
          </View>
          <View style={styles.subPanelHolder}>
            <View style={{ borderRightWidth: 1, flexGrow: 1 }}>
              <OrganizerPanel
                mainText={numMissing.toString()}
                subText="Missing"
              />
            </View>
            <View style={{ borderLeftWidth: 1, flexGrow: 1 }}>
              <OrganizerPanel
                mainText={numWaitlist.toString()}
                subText="Waitlist"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonHolder}>
          <Button
            type={numChecked < 24 ? "warn" : "light"}
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
  infoPanelHolder: {
    alignItems: "center",
    width: "100%",
    flexGrow: 1
  },
  mainPanel: {
    width: "100%",
    borderBottomWidth: 2,
    paddingBottom: 12,
    marginBottom: 18
  },
  subPanelHolder: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },
  buttonHolder: {
    flexGrow: 1,
    justifyContent: "space-between"
  }
});
