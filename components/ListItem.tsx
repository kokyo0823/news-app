import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type Props = {
  author: string,
  imageUrl: string,
  title: string,
  onPress: () => void,
}

const ListItem: React.FC<Props> = ({ onPress,imageUrl,title,author})=> {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={onPress}
    >
        <View style={styles.leftContainer}>
          <Image style={ {width: 100, height: 100,}} source={{uri: imageUrl}} />
        </View>
        <View style={styles.rightContainer}>
          {/* numderOfLines: 最大の行数を指定 */}
        <Text style={styles.text} numberOfLines={3}>{title}</Text>
        <Text style={styles.subText}>{author}</Text>
        </View>
      </TouchableOpacity>
  );
}
export default ListItem;

const styles = StyleSheet.create({
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
