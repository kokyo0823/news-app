import React, {useState, useEffect, ReactNode} from 'react';
import { StyleSheet, FlatList, SafeAreaView, Alert } from 'react-native';
import ListItem from "../components/ListItem";
import Loading from "../components/Loading";
import Constants from "expo-constants";
import axios from "axios";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Article } from '../types/article';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  route: RouteProp<RootStackParamList, "Home">;
};

interface articles{
  urlToImage: string,
  title: string,
  author: string,
}

const HomeScreen: React.FC<Props> = ({navigation,route}: Props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchArticles();
  }, []);

  //async / await: 非同期処理の構文
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.log('error');
    }
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: {item:Article}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', {article: item})}
          />
        )}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    //flex 1は空いているスペースをめいいっぱい使うという意味。
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize:16,
  },
  subText: {
    color: 'gray',
    fontSize: 12,
  }
});
