import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackgroundImageMain from './components/BackgroundImagMain';

const App = () => {
  return (
    <BackgroundImageMain //=> it is custom backgroud call , for reduce same code
      container={styles.container} //  ==>  you can customize chang style
      headerTextStyle={styles.headerTextStyle}
      imagUrl={
        'https://th.bing.com/th/id/OIP.tzH-sxxvRlqQErAApv0RcwAAAA?pid=ImgDet&w=178&h=251&c=7&dpr=1.5'
      } // => you can change image
      headerText={'This is a header text'} // ==> you can pass many props
    >
      <TouchableOpacity // ==> you can write many components in this body
        style={{
          width: 100,
          height: 100,
          marginTop: 30,
          marginLeft: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ea580c',
        }}>
        <Text style={styles.mainText}>Custom can write</Text>
      </TouchableOpacity>
    </BackgroundImageMain>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //you can customize many style
  },
  headerTextStyle: {
    color: '#030712',
    fontSize: 16,
    textAlign: 'center',
  },
  mainText: {
    fontSize: 20,
    color: '#f8fafc',
  },
});
