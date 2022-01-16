import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AuthNavProps {}

const AuthNav = (props: AuthNavProps) => {
  return (
    <View style={styles.container}>
      <Text>AuthNav</Text>
    </View>
  );
};

export default AuthNav;

const styles = StyleSheet.create({
  container: {},
});
