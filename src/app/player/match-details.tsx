import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import TitledSection from "@/components/titled-section";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function MatchDetails() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <PageHeader
        title="Matches Details"
        subtitle="Current Match"
        backBtn={() => router.navigate("/player")}
      />
      <TitledSection title="Scores" style={{ gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around"
          }}>
          <Pressable
            style={{
              borderRadius: 5,
              borderColor: "black",
              borderWidth: 1.5,
              alignItems: "center",
              width: 110
            }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Team 1</Text>
            <Text style={{ fontWeight: "bold", fontSize: 32 }}>10</Text>
          </Pressable>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>vs</Text>
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
              borderWidth: 1.5,
              alignItems: "center",
              width: 110
            }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Team 2</Text>
            <Text style={{ fontWeight: "bold", fontSize: 32 }}>8</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View
            style={{
              borderWidth: 1,
              flexGrow: 1,
              height: 0,
              borderColor: "#E3E3E3"
            }}
          />
          <Text style={{ fontWeight: "bold", color: "#646464" }}>
            Court 2 | 6:00 PM
          </Text>
          <View
            style={{
              borderWidth: 1,
              flexGrow: 1,
              height: 0,
              borderColor: "#E3E3E3"
            }}
          />
        </View>
        <Button>
          <Text>Report Dispute</Text>
        </Button>
      </TitledSection>
      <TitledSection title="Teams" style={{ gap: 10 }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#13732F",
            borderRadius: 5,
            paddingHorizontal: 10
          }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              borderBottomWidth: 2
            }}>
            Team 1 (Me)
          </Text>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialDesignIcons name="circle" size={45} color="lightgrey" />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Player W (Me)
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialDesignIcons name="circle" size={45} color="lightgrey" />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Player X</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#13732F",
            borderRadius: 5,
            paddingHorizontal: 10
          }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              borderBottomWidth: 2
            }}>
            Team 2
          </Text>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialDesignIcons name="circle" size={45} color="lightgrey" />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Player Y</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialDesignIcons name="circle" size={45} color="lightgrey" />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Player Z</Text>
            </View>
          </View>
        </View>
      </TitledSection>
      <TitledSection title="Match Info" style={{ gap: 10 }}>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <MaterialDesignIcons name="calendar" size={30} />
          <Text>Mon Jun 26</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <MaterialDesignIcons name="clock-outline" size={30} />
          <Text>6:00 PM</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <MaterialDesignIcons name="map-marker-outline" size={30} />
          <View>
            <Text>Humber Polytechnic North Campus</Text>
            <Text>Court 2</Text>
          </View>
        </View>
      </TitledSection>
    </View>
  );
}
