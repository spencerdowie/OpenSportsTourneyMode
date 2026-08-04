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
  "numeric-10-circle-outline",
  "circle-outline"
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
  "numeric-10-circle",
  "circle-slice-8"
] as const;

type NumericIconTypeFilled = (typeof NumericIconListFilled)[number];

const maxPlayers = 24;

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
    { id: 15, name: "Player O", status: "registered" },
    { id: 16, name: "Player P", status: "checkedin" },
    { id: 17, name: "Player Q", status: "checkedin" },
    { id: 18, name: "Player R", status: "checkedin" },
    { id: 19, name: "Player S", status: "registered" },
    { id: 20, name: "Player T", status: "checkedin" },
    { id: 21, name: "Player U", status: "waitlist" },
    { id: 22, name: "Player V", status: "checkedin" },
    { id: 23, name: "Player X", status: "waitlist" },
    { id: 24, name: "Player Y", status: "checkedin" },
    { id: 25, name: "Player Z", status: "registered" },
    { id: 26, name: "Player AA", status: "registered" },
    { id: 27, name: "Player AB", status: "waitlist" }
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
          width: "100%"
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
    index = index > 10 ? 10 : index;
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
          if (filter == "registered" || filter == "waitlist") {
            if (
              selected[item.id] ||
              PlayerList.filter((player) => player.status == "checkedin")
                .length +
                Object.keys(selected).length <
                maxPlayers
            ) {
              const newSelected = { ...selected };
              if (newSelected[item.id]) delete newSelected[item.id];
              else newSelected[item.id] = true;
              SetSelected(newSelected);
            }
          }
        }}>
        <View>
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
          <Text>{item.status}</Text>
        </View>
        {PlayerSelector(index, item.id)}
      </Pressable>
    ));
  }

  function CreatFilterTabs() {
    return (
      <View
        id="checkin-tabs"
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-around"
        }}>
        <Pressable
          onPress={() => setFilter("all")}
          style={[styles.tabs, filter == "all" && { backgroundColor: "grey" }]}>
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
    );
  }

  return (
    <View style={{ height: "100%" }}>
      <PageHeader
        title="Check-in Manager"
        subtitle="Updated 1 min ago"
        backBtn={() =>
          router.navigate(
            `/organizer?checked=${
              PlayerList.filter((player) => player.status == "checkedin").length
            }&missing=${
              PlayerList.filter((player) => player.status == "registered")
                .length
            }&waitlist=${
              PlayerList.filter((player) => player.status == "waitlist").length
            }`
          )
        }
      />
      <View style={{ flexGrow: 1 }}>
        {CreatFilterTabs()}
        <ScrollView
          id="player-list"
          style={{
            maxHeight: 650
          }}
          contentContainerStyle={{ overflow: "scroll", flexShrink: 1 }}>
          {GetDisplayedPlayerList()}
        </ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 10,
            width: "100%"
          }}>
          {filter == "waitlist" ? (
            <Button
              disabled={Object.keys(selected).length <= 0}
              onPress={() => {
                SetPlayerList(
                  PlayerList.map((player) => {
                    if (selected[player.id]) {
                      player.status = "checkedin";
                    }
                    return player;
                  })
                );
              }}>
              <Text>Promote from Waitlist</Text>
            </Button>
          ) : filter == "registered" ? (
            <Button
              disabled={Object.keys(selected).length <= 0}
              onPress={() => {
                SetPlayerList(
                  PlayerList.map((player) => {
                    if (selected[player.id]) {
                      player.status = "waitlist";
                    }
                    return player;
                  })
                );
              }}>
              <Text>Move to Waitlist</Text>
            </Button>
          ) : null}
          {ProgressBar()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: { flexGrow: 1, flexBasis: 0, alignItems: "center" }
});
