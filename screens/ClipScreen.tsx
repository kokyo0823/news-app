import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from "../components/ListItem";
import { useSelector } from 'react-redux';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";
import {State} from "../types/state";
import {User} from "../types/user";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Clip">;
  route: RouteProp<RootStackParamList, "Clip">;
};

const ClipScreen: React.FC<Props> = (props) => {
  const user = useSelector((state: any) => state.user);
  const { navigation } = props;
  const { clips } = user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', {article: item})}
          />
        )}
      />
    </SafeAreaView>
  );
}
export default ClipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
