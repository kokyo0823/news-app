import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from "../components/ListItem";
import { useSelector } from 'react-redux';

type Props = {
  navigation: any,
}

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


// import React from "react";
// import { StyleSheet, SafeAreaView, Text, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
// import { useSelector } from "react-redux";
// import ListItem from "../components/ListItem";

// type Props = {
//   navigation: any,
// }

// const ClipScreen:React.FC<Props> = (props) => {
//   const user = useSelector((state:any) => state.user);
//   const { clips } = user;
//   const { navigation } = props;
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={clips}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => {
//           <ListItem
//             imageUrl={item.urlToImage}
//             title={item.title}
//             author={item.author}
//             onPress={() => navigation.navigate('Article', {article: item})}
//           />
//         }}
//       />
//     </SafeAreaView>
//   );
// };
// export default ClipScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
