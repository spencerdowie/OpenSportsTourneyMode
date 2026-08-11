import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import TitledSection from "@/components/titled-section";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function MatchDetails() {
  return (
    <>
      <PageHeader
        title="Matches Details"
        subtitle="Current Match"
        backBtn={() => router.navigate("/player")}
      />
      <TitledSection title="Scores">
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              borderRadius: 5,
              borderColor: "black",
              borderWidth: 2
            }}>
            <Text>Team 1</Text>
            <Text>10</Text>
          </Pressable>
          <View>
            <Text>vs</Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#13732F",
                backgroundColor: "#D3FFDD",
                borderRadius: 23,
                paddingHorizontal: 10,
                paddingVertical: 5
              }}>
              Live
            </Text>
          </View>
          <Pressable
            style={{
              borderRadius: 5,
              borderColor: "black",
              borderWidth: 2
            }}>
            <Text>Team 2</Text>
            <Text>10</Text>
          </Pressable>
        </View>
      </TitledSection>
      <TitledSection title="Teams">
        <StatusBox title="Team 1 (Me)" detail="team names" />
        <StatusBox title="Team 2" detail="team names" />
      </TitledSection>
      <TitledSection title="Match Info">
        <View style={{ flexDirection: "row" }}>
          <MaterialDesignIcons name="calendar" size={30} />
          <Text>Mon Jun 26</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialDesignIcons name="clock-outline" size={30} />
          <Text>6:00 PM</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialDesignIcons name="map-marker-outline" size={30} />
          <View>
            <Text>Humber Polytechnic North Campus</Text>
            <Text>Court 2</Text>
          </View>
        </View>
      </TitledSection>
    </>
  );
}
