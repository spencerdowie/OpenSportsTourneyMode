import data from "@/assets/tournament.json";
import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import Selector from "@/components/selector";
import StatusBox from "@/components/status-box";
import TextInput from "@/components/text-input";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppContext } from "../_layout";

//Mock database schema
type TournamentData = {
  id: number;
  name: string;
  organizer: { orgName: string; admin: string };
  date: string;
  location: string;
  registrationOptions: { value: string; name: string }[];
};

export default function Registration() {
  const [regStep, setRegStep] = useState(1);
  const { SetName, SetSkillLevel, options, SetOptions } =
    useContext(AppContext);

  const [tournamentInfo, SetTournamentInfo] = useState<TournamentData>({
    id: -1,
    name: "Test",
    organizer: { orgName: "Test", admin: "Test" },
    date: "",
    location: "",
    registrationOptions: []
  });

  const { tournament: id } = useLocalSearchParams<{ tournament?: string }>();

  //Grabs the mock tournament data from a json file
  useEffect(() => {
    if (id) {
      let tournament = data.find((t) => t.id == Number.parseInt(id));
      if (tournament) {
        SetTournamentInfo(tournament);
        let options: { [option: string]: boolean } = {};
        tournament.registrationOptions.forEach(
          (option) => (options[option.value] = false)
        );
        //console.log(options);
        SetOptions(options);
      }
    }
  }, [tournamentInfo]);

  function RegPage() {
    if (regStep == 1) {
      return (
        <View>
          <PageHeader
            title="Join Tournament"
            subtitle={`Step ${regStep} of 2`}
          />
          <StatusBox
            type="confirm"
            title="Scan Confirmed"
            detail="You're joining as a guest"
          />
          <TextInput
            label="Firstname or nickname"
            placeholder="e.g. Bob"
            onChange={(text) => {
              //console.log(text);
              SetName(text);
            }}
          />
          <Selector
            label="Experience Level"
            options={["New", "Casual", "Skilled"].map((option) => {
              return { value: option, name: option };
            })}
            onChange={(selection) => {
              //console.log(selection)
              SetSkillLevel(selection);
            }}
          />
          <View style={{ marginTop: 20, gap: 20 }}>
            <Button onPress={() => setRegStep(2)}>Next</Button>
            <Button type="light">I already have an account</Button>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <PageHeader title="Confirm Readiness" subtitle="Step 2 of 2" />
          <StatusBox
            type="wait"
            title="Almost Done"
            detail="Tell the organizer what matters"
          />
          <Selector
            options={tournamentInfo.registrationOptions}
            onChange={(selection, value) => {
              //console.log(selection);
              let newOptions = options;
              newOptions[selection] = value;
              SetOptions(newOptions);
            }}
            direction="vert"
            multi
            boxes
          />
          <Button
            onPress={() => {
              //console.log(regData);
              router.navigate(`/tournament/checkin-confirm?tournament=${id}`);
            }}>
            Save & join event
          </Button>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title={tournamentInfo.name}
        subtitle={tournamentInfo.organizer.orgName}
        backBtn={
          regStep > 1
            ? () => setRegStep(regStep - 1)
            : () => router.navigate("/")
        }
      />
      {RegPage()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto",
    gap: 20
  }
});
