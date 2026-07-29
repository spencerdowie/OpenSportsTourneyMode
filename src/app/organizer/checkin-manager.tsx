import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
type Player = {
  id: number;
  name: string;
  status: "checkedin" | "registered" | "waitlist";
};

const NumericIconList = [
  "numeric-1-circle-outline",
  "numeric-2-circle-outline",
  "numeric-3-circle-outline",
  "numeric-4-circle-outline",
  "numeric-5-circle-outline",
  "numeric-6-circle-outline",
  "numeric-7-circle-outline",
  "numeric-8-circle-outline",
  "numeric-9-circle-outline",
  "numeric-10-circle-outline"
] as const;

type NumericIconType = (typeof NumericIconList)[number];

const NumericIconListFilled = [
  "numeric-1-circle",
  "numeric-2-circle",
  "numeric-3-circle",
  "numeric-4-circle",
  "numeric-5-circle",
  "numeric-6-circle",
  "numeric-7-circle",
  "numeric-8-circle",
  "numeric-9-circle",
  "numeric-10-circle"
] as const;

type NumericIconTypeFilled = (typeof NumericIconListFilled)[number];

export default function CheckinManager() {
  const [PlayerList, SetPlayerList] = useState<Player[]>([
    { id: 1, name: "Player A", status: "checkedin" },
    { id: 2, name: "Player B", status: "checkedin" },
    { id: 3, name: "Player C", status: "checkedin" },
    { id: 4, name: "Player D", status: "checkedin" },
    { id: 5, name: "Player E", status: "checkedin" },
    { id: 6, name: "Player F", status: "registered" },
    { id: 7, name: "Player G", status: "registered" },
    { id: 8, name: "Player H", status: "registered" },
    { id: 9, name: "Player I", status: "checkedin" },
    { id: 10, name: "Player J", status: "checkedin" },
    { id: 11, name: "Player K", status: "checkedin" },
    { id: 12, name: "Player L", status: "checkedin" },
    { id: 13, name: "Player M", status: "waitlist" },
    { id: 14, name: "Player N", status: "waitlist" },
    { id: 15, name: "Player O", status: "waitlist" }
  ]);
  const [filter, setFilter] = useState<
    "all" | "checkedin" | "registered" | "waitlist"
  >("all");
  const [selected, SetSelected] = useState<{ [index: number]: boolean }>({});

  useEffect(() => {
    SetSelected({});
  }, [filter]);

  function ProgressBar() {
    const checkedIn = PlayerList.filter(
      (player) => player.status == "checkedin"
    ).length;
    return (
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          flexShrink: 0,
          position: "relative",
          bottom: 0
        }}>
        <View
          style={{
            height: 34,
            backgroundColor: "lightgrey",
            borderRadius: 10,
            overflow: "hidden",
            flexDirection: "row"
          }}>
          <View
            style={{
              height: 34,
              backgroundColor: "seagreen",
              width: `${(checkedIn / 24) * 100}%`
            }}></View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              position: "absolute",
              width: "100%",
              textAlign: "center",
              alignSelf: "center"
            }}>
            {checkedIn}/24
          </Text>
        </View>
      </View>
    );
  }

  function GetNumberIconName(
    index: number,
    selected: boolean
  ): NumericIconType | NumericIconTypeFilled {
    return selected ? NumericIconListFilled[index] : NumericIconList[index];
  }

  function PlayerSelector(index: number, id: number) {
    if (filter == "registered")
      return (
        <MaterialDesignIcons
          name={selected[id] ? "circle-slice-8" : "circle-outline"}
          size={30}
          color="red"
          style={{
            alignSelf: "center"
          }}
        />
      );
    else if (filter == "waitlist")
      return (
        <MaterialDesignIcons
          name={GetNumberIconName(index, selected[id])}
          size={30}
          color="blue"
          style={{
            alignSelf: "center"
          }}
        />
      );
  }

  function GetDisplayedPlayerList() {
    return PlayerList.filter(
      (player) => filter == "all" || player.status == filter
    ).map((item, index) => (
      <Pressable
        key={index}
        style={[
          {
            height: 50,
            paddingHorizontal: 20,
            paddingVertical: 10,
            overflow: "visible",
            flexDirection: "row",
            justifyContent: "space-between"
          },
          index % 2 == 0 ? { backgroundColor: "#d8ffd4" } : {}
        ]}
        onPress={() => {
          if (filter == "registered" || filter == "waitlist")
            SetSelected({ ...selected, [item.id]: !selected[item.id] });
        }}>
        <View>
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
          <Text>{item.status}</Text>
        </View>
        {PlayerSelector(index, item.id)}
      </Pressable>
    ));
  }

  return (
    <View style={{ height: "100%" }}>
      <PageHeader
        title="Check-in Manager"
        subtitle="Updated 1 min ago"
        backBtn={() => router.navigate("/organizer")}
      />
      <View style={{ flexDirection: "column", height: "100%" }}>
        <View
          id="checkin-tabs"
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
        <ScrollView
          id="player-list"
          style={{
            maxHeight: 650
          }}
          contentContainerStyle={{ overflow: "scroll", flexShrink: 1 }}>
          {GetDisplayedPlayerList()}
        </ScrollView>
        <Button
          onPress={() => {
            PlayerList.map((player) => player);
          }}>
          <Text>Promote from Waitlist</Text>
        </Button>
        {ProgressBar()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: { flexGrow: 1, flexBasis: 0, alignItems: "center" }
});
