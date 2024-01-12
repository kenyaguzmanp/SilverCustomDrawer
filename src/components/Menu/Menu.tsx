import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HamburguerMenuIcon from '../../SvgIcons/HamburguerMenuIcon/HamburguerMenuIcon';

interface MenuProps {}

export const Menu: FC<MenuProps> = ({ onPress, title }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <HamburguerMenuIcon />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 30,
    textTransform: 'uppercase',
    color: colors.gray1,
  },
});
