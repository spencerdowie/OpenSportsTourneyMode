import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { StyleSheet, Text, View } from "react-native";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  backBtn?: () => any;
};

export default function PageHeader({
  title,
  subtitle,
  backBtn
}: PageHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%"
      }}>
      {backBtn ? (
        <MaterialDesignIcons name="chevron-left" size={34} onPress={backBtn} />
      ) : null}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { width: "100%" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left"
  },
  subtitle: {
    fontSize: 14,
    textAlign: "left"
  }
});
