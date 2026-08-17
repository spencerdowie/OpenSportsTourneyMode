import OrganizerTool from "@/components/organizer-tool";
import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";
import { AppContext } from "../_layout";

export default function CommandCentre() {
  const { issue, SetIssueState } = useContext(AppContext);
  return (
    <View>
      <PageHeader
        title="Command Centre"
        subtitle="Few open issues found"
        backBtn={() => router.navigate("/organizer")}
      />
      <View>
        {issue ? (
          <OrganizerTool
            icon="home-switch"
            name="High Priority"
            description="Court 4 Unavailable"
            actionName="Resolve"
            actionPress={() => SetIssueState(false)}
            warn={issue}
          />
        ) : (
          <OrganizerTool
            icon="home-switch"
            name="Resources"
            description="Court 4 Unavailable"
            actionName="Manage"
            actionPress={() => null}
          />
        )}
        <OrganizerTool
          icon="clock-time-nine"
          name="Facility Delay"
          description="Post Schedule Updates"
          actionName="Update"
          actionPress={() => null}
        />
        <OrganizerTool
          icon="account-group"
          name="Team Dropped"
          description="Rebalance Brackets"
          actionName="Rebalance"
          actionPress={() => null}
        />
        <OrganizerTool
          icon="arrow-u-left-top"
          name="Equipment Returns"
          description="Send Reminders"
          actionName="Remind"
          actionPress={() => null}
        />
        <OrganizerTool
          icon="transfer"
          name="Rule Change"
          description="Broadcast to all players"
          actionName="Broadcast"
          actionPress={() => null}
        />
      </View>
    </View>
  );
}
