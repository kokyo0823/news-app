import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import {addClip,deleteClip} from "../store/actions/user";

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

const ArticleScreen: React.FC<Props> = (props) => {
  const { route } = props;
  const { article } = route.params;

  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => { dispatch(addClip({clip: article}))}}>
        <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { dispatch(deleteClip({clip: article}))}}>
        <Text style={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  )
};
export default ArticleScreen;
