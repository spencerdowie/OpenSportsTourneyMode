import OrganizerPanel from "@/components/organizer-panel";
import PageHeader from "@/components/page-header";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <PageHeader title="Humber Pickleball Tournament" subtitle={"Organizer"} />
      <FlatList
        style={styles.panelGrid}
        numColumns={2}
        data={[
          { mainText: "21/24" },
          { mainText: "21/24" },
          { mainText: "21/24" },
          { mainText: "21/24" }
        ]}
        renderItem={({ item }) => <OrganizerPanel />}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  panelGrid: { gap: 20 }
});
