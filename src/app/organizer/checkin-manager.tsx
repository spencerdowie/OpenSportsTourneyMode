import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
type Player = {
  name: string;
  status: "checkedin" | "registered" | "waitlist";
};
const PlayerList: Player[] = [
  { name: "Player A", status: "checkedin" },
  { name: "Player B", status: "checkedin" },
  { name: "Player C", status: "checkedin" },
  { name: "Player D", status: "checkedin" },
  { name: "Player E", status: "checkedin" },
  { name: "Player F", status: "registered" },
  { name: "Player G", status: "registered" },
  { name: "Player H", status: "registered" },
  { name: "Player I", status: "checkedin" },
  { name: "Player J", status: "checkedin" },
  { name: "Player K", status: "checkedin" },
  { name: "Player L", status: "checkedin" },
  { name: "Player M", status: "waitlist" },
  { name: "Player N", status: "waitlist" },
  { name: "Player O", status: "waitlist" }
];
export default function CheckinManager() {
  const [filter, setFilter] = useState<
    "all" | "checkedin" | "registered" | "waitlist"
  >("all");
  return (
    <View>
      <PageHeader
        title="Check-in Manager"
        subtitle="Updated 1 min ago"
        backBtn={() => router.navigate("/organizer")}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-around"
          }}>
          <Pressable
            onPress={() => setFilter("all")}
            style={[
              styles.tabs,
              filter == "all" && { backgroundColor: "grey" }
            ]}>
            <Text>All</Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("checkedin")}
            style={[
              styles.tabs,
              filter == "checkedin" && { backgroundColor: "#118A2B" }
            ]}>
            <Text>Checked-in</Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("registered")}
            style={[
              styles.tabs,
              filter == "registered" && { backgroundColor: "#A10000" }
            ]}>
            <Text>Registered</Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("waitlist")}
            style={[
              styles.tabs,
              filter == "waitlist" && { backgroundColor: "#3E73AA" }
            ]}>
            <Text>Waitlist</Text>
          </Pressable>
        </View>
        <FlatList
          data={PlayerList.filter(
            (player) => filter == "all" || player.status == filter
          )}
          renderItem={({ item, index }) => (
            <View
              style={[
                {
                  height: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 10
                },
                index % 2 == 0 ? { backgroundColor: "#d8ffd4" } : {}
              ]}>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text>{item.status}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: { flexGrow: 1, flexBasis: 0, alignItems: "center" }
});
