import PageHeader from "@/components/page-header";
import { router } from "expo-router";

export default function TeamInformation() {
  return (
    <>
      <PageHeader
        title="Your Team"
        subtitle="Team 1"
        backBtn={() => router.navigate("/player")}
      />
    </>
  );
}
