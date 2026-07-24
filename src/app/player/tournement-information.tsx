import PageHeader from "@/components/page-header";
import { router } from "expo-router";

export default function RoundMatches() {
  return (
    <>
      <PageHeader
        title="Tournament Information"
        subtitle="OpenSports"
        backBtn={() => router.navigate("/player")}
      />
    </>
  );
}
