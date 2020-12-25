import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch,useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import { ClipButton } from "../components/ClipButton";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";
import {State} from "../types/state";
import { User } from "../types/user";
import Loading from "../components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

interface state {
  user: {
    clips: any
  }
}

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Article">;
  route: RouteProp<RootStackParamList, "Article">;
};

const ArticleScreen: React.FC<Props> = ({navigation,route}: Props) => {
  const { article } = route.params;

  const dispatch = useDispatch();


  const user = useSelector((state: any) => state.user);
  const { clips } = user;

  const isClipped = () => {
    //someで配列の要素のうち特定のものを取得する
    return clips.some((clip:any) => clip.url === article.url);
  }
  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    }
    else {
      dispatch(addClip({ clip: article }));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{uri: article.url}} startInLoadingState={true} renderLoading={()=> <Loading />} />
    </SafeAreaView>
  )
};
export default ArticleScreen;
