import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ImageBackgroundProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';

// => it is props interface
interface BackgroundImageMainProps extends ImageBackgroundProps {
  headerText: string;
  imagUrl: string;
  headerTextStyle?: TextStyle;
  container?: ViewStyle;
  children?: ReactNode;
}

// reduce code for same

const BackgroundImageMain: React.FC<BackgroundImageMainProps> = props => {
  return (
    <ImageBackground
      source={{
        uri: props.imagUrl,
      }}
      style={props.container}
      resizeMode={'stretch'}>
      <View style={styles.headerContainer}>
        <Text style={props.headerTextStyle}>{props.headerText}</Text>
      </View>
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImageMain;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: '#99f6e4',
    justifyContent: 'center',
  },
});
