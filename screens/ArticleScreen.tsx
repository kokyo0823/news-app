import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import {WebView} from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
type Props = {
  route: {
    params: {
      article: {
        url: string,
      }
    }
  }
}

const ArticleScreen:React.FC<Props> = (props) => {
  const { route } = props;
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  )
};
export default ArticleScreen;
