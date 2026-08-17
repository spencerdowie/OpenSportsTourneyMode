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
        marginVertical: 10,
        alignSelf: "flex-start"
      }}>
      {backBtn && (
        <MaterialDesignIcons
          name="chevron-left"
          size={56}
          onPress={backBtn}
          style={{ display: "contents" }}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexWrap: "wrap", flexShrink: 1 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    overflow: "hidden",
    flexWrap: "wrap"
  },
  subtitle: {
    fontSize: 14,
    textAlign: "left"
  }
});
