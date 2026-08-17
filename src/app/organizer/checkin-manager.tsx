import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../_layout";
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
  "circle-outline",
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
  "circle-slice-8",
] as const;

type NumericIconTypeFilled = (typeof NumericIconListFilled)[number];

const maxPlayers = 12;

export default function CheckinManager() {
  const [PlayerList, SetPlayerList] = useState<Player[]>([
    { id: 1, name: "Player A", status: "checkedin" },
    { id: 2, name: "Player B", status: "checkedin" },
    { id: 3, name: "Player C", status: "checkedin" },
    { id: 4, name: "Player D", status: "checkedin" },
    { id: 5, name: "Player E", status: "checkedin" },
    { id: 6, name: "Player F", status: "waitlist" },
    { id: 7, name: "Player G", status: "registered" },
    { id: 8, name: "Player H", status: "registered" },
    { id: 9, name: "Player I", status: "checkedin" },
    { id: 10, name: "Player J", status: "checkedin" },
    { id: 11, name: "Player K", status: "checkedin" },
    { id: 12, name: "Player L", status: "checkedin" },
    { id: 13, name: "Player M", status: "waitlist" },
    { id: 14, name: "Player N", status: "waitlist" },
    { id: 15, name: "Player O", status: "checkedin" },
  ]);
  const [filter, setFilter] = useState<
    "all" | "checkedin" | "registered" | "waitlist"
  >("all");
  const [selected, SetSelected] = useState<{ [index: number]: boolean }>({});
  const { checkinState, SetCheckinState } = useContext(AppContext);

  useEffect(() => {
    SetSelected({});
  }, [filter]);

  function ProgressBar() {
    return (
      <View style={progressBar.holder}>
        <View style={progressBar.background}>
          <View
            style={[
              progressBar.fill,
              {
                width: `${(checkinState.checkin / maxPlayers) * 100}%`,
              },
            ]}
          ></View>
          <Text style={progressBar.text}>
            {checkinState.checkin}/{maxPlayers}
          </Text>
        </View>
      </View>
    );
  }

  function GetNumberIconName(
    index: number,
    selected: boolean,
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
            alignSelf: "center",
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
            alignSelf: "center",
          }}
        />
      );
  }

  function GetDisplayedPlayerList() {
    return PlayerList.filter(
      (player) => filter == "all" || player.status == filter,
    ).map((item, index) => (
      <Pressable
        key={index}
        style={[
          styles.playerDetail,
          index % 2 == 0 ? {} : { backgroundColor: "#d8ffd4" },
        ]}
        onPress={() => {
          if (filter == "registered" || filter == "waitlist") {
            if (
              filter == "registered" ||
              selected[item.id] ||
              checkinState.checkin + Object.keys(selected).length < maxPlayers
            ) {
              const newSelected = { ...selected };
              if (newSelected[item.id]) delete newSelected[item.id];
              else newSelected[item.id] = true;
              SetSelected(newSelected);
            }
          }
        }}
      >
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
          borderBottomWidth: 2,
          borderColor: "#3B3B3B",
        }}
      >
        <Pressable onPress={() => setFilter("all")} style={styles.tabs}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {filter == "all" && (
              <MaterialDesignIcons name="circle" color="#646464" />
            )}
            <Text
              style={[filter == "all" && { fontWeight: "bold" }]}
            >{`All ${PlayerList.length}`}</Text>
          </View>
          {filter == "all" && (
            <View
              style={[
                styles.tabLine,
                {
                  borderColor: "#646464",
                  bottom: -3,
                },
              ]}
            />
          )}
        </Pressable>
        <Pressable onPress={() => setFilter("checkedin")} style={styles.tabs}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {filter == "checkedin" && (
              <MaterialDesignIcons name="circle" color="#13732F" />
            )}
            <Text
              style={[filter == "checkedin" && { fontWeight: "bold" }]}
            >{`Checked In ${PlayerList.reduce<number>(
              (count, player) =>
                player.status == "checkedin" ? count + 1 : count,
              0,
            )}`}</Text>
            {filter == "checkedin" && (
              <View
                style={[
                  styles.tabLine,
                  {
                    borderColor: "#13732F",
                  },
                ]}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => setFilter("registered")} style={styles.tabs}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {filter == "registered" && (
              <MaterialDesignIcons name="circle" color="#C88C2C" />
            )}
            <Text
              style={[filter == "registered" && { fontWeight: "bold" }]}
            >{`Registered ${PlayerList.reduce<number>(
              (count, player) =>
                player.status == "registered" ? count + 1 : count,
              0,
            )}`}</Text>
            {filter == "registered" && (
              <View
                style={[
                  styles.tabLine,
                  {
                    borderColor: "#C88C2C",
                  },
                ]}
              />
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => setFilter("waitlist")} style={styles.tabs}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {filter == "waitlist" && (
              <MaterialDesignIcons name="circle" color="#3E73AA" />
            )}
            <Text
              style={[filter == "waitlist" && { fontWeight: "bold" }]}
            >{`Waitlist ${PlayerList.reduce<number>(
              (count, player) =>
                player.status == "waitlist" ? count + 1 : count,
              0,
            )}`}</Text>
            {filter == "waitlist" && (
              <View
                style={[
                  styles.tabLine,
                  {
                    borderColor: "#3E73AA",
                  },
                ]}
              />
            )}
          </View>
        </Pressable>
      </View>
    );
  }

  function ShowActionButton() {
    switch (filter) {
      case "waitlist":
        return (
          <Button
            disabled={Object.keys(selected).length <= 0}
            onPress={() => {
              SetPlayerList(
                PlayerList.map((player) => {
                  if (selected[player.id]) {
                    player.status = "checkedin";
                  }
                  return player;
                }),
              );
              UpdateCheckinState();
            }}
          >
            <Text>Promote from Waitlist</Text>
          </Button>
        );
      case "registered":
        return (
          <Button
            disabled={Object.keys(selected).length <= 0}
            onPress={() => {
              SetPlayerList(
                PlayerList.map((player) => {
                  if (selected[player.id]) {
                    player.status = "waitlist";
                  }
                  return player;
                }),
              );
              UpdateCheckinState();
            }}
          >
            <Text>Move to Waitlist</Text>
          </Button>
        );
      default:
        return null;
    }
  }

  function UpdateCheckinState() {
    SetCheckinState({
      checkin: PlayerList.filter((player) => player.status == "checkedin")
        .length,
      registered: PlayerList.filter((player) => player.status == "registered")
        .length,
      waitlist: PlayerList.filter((player) => player.status == "waitlist")
        .length,
    });
  }

  return (
    <View style={{ height: "100%" }}>
      <PageHeader
        title="Check-in Manager"
        subtitle="Updated 1 min ago"
        backBtn={() => router.navigate(`/organizer`)}
      />
      <View style={{ flexGrow: 1 }}>
        {CreatFilterTabs()}
        <ScrollView
          id="player-list"
          style={{
            maxHeight: 650,
          }}
          contentContainerStyle={{ overflow: "scroll", flexShrink: 1 }}
        >
          {GetDisplayedPlayerList()}
        </ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 10,
            width: "100%",
          }}
        >
          {ShowActionButton()}
          {ProgressBar()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexGrow: 1,
    flexBasis: "auto",
    alignItems: "center",
    paddingBottom: 5,
  },
  tabsText: {
    fontSize: 10,
    color: "#646464",
  },
  tabLine: {
    width: "100%",
    borderWidth: 3,
    borderRadius: 6,
    borderColor: "#646464",
    position: "absolute",
    bottom: -9,
  },
  playerDetail: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: "visible",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const progressBar = StyleSheet.create({
  holder: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  background: {
    height: 34,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  fill: {
    height: 34,
    backgroundColor: "seagreen",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
  },
});
