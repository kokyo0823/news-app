import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import {WebView} from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = (props: any) => {
  const { route } = props;
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  )
};
export default ArticleScreen;
