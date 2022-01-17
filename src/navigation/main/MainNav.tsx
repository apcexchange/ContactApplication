import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface MainNavProps {}

const MainNav = (props: MainNavProps) => {
  return (
    <View style={styles.container}>
      <Text>MainNav</Text>
    </View>
  );
};

export default MainNav;

const styles = StyleSheet.create({
  container: {},
});
