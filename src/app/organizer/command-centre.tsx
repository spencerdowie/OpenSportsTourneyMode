import OrganizerTool from "@/components/organizer-tool";
import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { View } from "react-native";

export default function CommandCentre() {
  return (
    <View>
      <PageHeader
        title="Command Centre"
        subtitle="Few open issues found"
        backBtn={() => router.navigate("/organizer")}
      />
      <View>
        <OrganizerTool
          icon="exclamation"
          name="High Priority"
          description="Court 4 Unavailable :
1 Team Short"
          actionName="Resolve"
          actionPress={() => null}
        />
      </View>
    </View>
  );
}
