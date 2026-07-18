import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
type Player = {
  name: string;
  status: "checkedin" | "registered" | "waitlist";
};
const PlayerList: Player[] = [
  { name: "Player 1", status: "checkedin" },
  { name: "Player 2", status: "checkedin" },
  { name: "Player 3", status: "checkedin" },
  { name: "Player 4", status: "checkedin" },
  { name: "Player 5", status: "checkedin" },
  { name: "Player 6", status: "registered" },
  { name: "Player 7", status: "registered" },
  { name: "Player 8", status: "registered" },
  { name: "Player 9", status: "checkedin" },
  { name: "Player 10", status: "checkedin" },
  { name: "Player 11", status: "checkedin" },
  { name: "Player 12", status: "checkedin" },
  { name: "Player 13", status: "waitlist" },
  { name: "Player 14", status: "waitlist" },
  { name: "Player 15", status: "waitlist" }
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
      <View style={{ marginLeft: 20 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable
            onPress={() => setFilter("all")}
            style={[
              { paddingHorizontal: 10 },
              filter == "all" && { backgroundColor: "grey" }
            ]}>
            <Text>All</Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("checkedin")}
            style={[
              { paddingHorizontal: 10 },
              filter == "checkedin" && { backgroundColor: "grey" }
            ]}>
            <Text>Checked-in</Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("registered")}
            style={[
              { paddingHorizontal: 10 },
              filter == "registered" && { backgroundColor: "grey" }
            ]}>
            <Text>Registered</Text>
          </Pressable>
          <Pressable
            onPress={() => setFilter("waitlist")}
            style={[
              { paddingHorizontal: 10 },
              filter == "waitlist" && { backgroundColor: "grey" }
            ]}>
            <Text>Waitlist</Text>
          </Pressable>
        </View>
        <FlatList
          data={PlayerList.filter(
            (player) => filter == "all" || player.status == filter
          )}
          renderItem={({ item }) => (
            <Text>
              {item.name} - {item.status}
            </Text>
          )}
        />
      </View>
    </View>
  );
}
