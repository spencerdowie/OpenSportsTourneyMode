import Button from "@/components/button";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.tourneyInfo} id="tourney-info">
        <Text style={styles.tourneyTitle}>Humber Tournament Open</Text>
        <Text>Organizer</Text>
      </View>
      <View id="OS-logo">
        <Image
          style={styles.osLogo}
          source={require("../../assets/images/opensports-logo.png")}
        />
        <Text style={styles.osTitle}>OpenSports</Text>
      </View>
      <View id="login-btns" style={styles.loginBtnHolder}>
        <Button onPress={() => router.navigate("/login?tournament=1")}>
          Login
        </Button>
        <Button
          onPress={() =>
            router.navigate("/tournament/registration?tournament=1")
          }
          type="light"
        >
          Continue as Guest
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  tourneyInfo: {
    marginTop: 80,
    marginBottom: 70,
  },
  tourneyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  osTitle: {
    fontStyle: "italic",
    color: "#13732F",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  osLogo: {
    width: 128,
    height: 128,
  },
  loginBtnHolder: {
    marginTop: 70,
    gap: 22,
    width: 350,
  },
});
