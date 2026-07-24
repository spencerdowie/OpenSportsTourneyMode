import PageHeader from "@/components/page-header";
import { router } from "expo-router";

export default function RoundMatches() {
  return (
    <>
      <PageHeader
        title="Round Matches"
        subtitle="Round 1 of 4"
        backBtn={() => router.navigate("/player")}
      />
    </>
  );
}
