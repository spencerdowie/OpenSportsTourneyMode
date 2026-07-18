import MatchDetail from "@/components/match-display";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import TitledSection from "@/components/titled-section";
import { View } from "react-native";

export default function Player() {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <PageHeader title="Humber Tournament Open" subtitle="Organizer" />
      <StatusBox
        type="confirm"
        title="You're Checked In"
        detail="Status: Match Ready"
      />
      <TitledSection title="Next Match">
        <MatchDetail />
      </TitledSection>
      <TitledSection title="Explore"></TitledSection>
    </View>
  );
}
