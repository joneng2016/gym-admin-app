import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const MainMenu = () => {
  var [isNewMenuActive, setIsNewMenuActive] = React.useState(false)

  const newTrain = () => {
    setIsNewMenuActive(true)
  }

  const accessTrain = () => {
    console.log('acceswwww train')
  }

  return (
    <View>
      <Text
        style={styles.generalMenuStructure}>

          <Text
            style= {isNewMenuActive ? styles.accessMenuNewTrainDesactive:styles.accessMenuNewTrainActive }
            onPress={newTrain}
          >
              Cadastrar
          </Text>

          <Text
            style= {styles.accessTrainAccessTrain}
            onPress={accessTrain}
          >
              Acesssar
          </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  generalMenuStructure: {
    backgroundColor: '#000',
    flexDirection: 'row',
    maxWidth: '500px',
    justifyContent: 'center',
    borderRadius:"15px",
    fontSize: "20px",
    marginTop: '5px',
    width: Dimensions.get('window').width,
    textAlign: 'center',
    padding:'5px',
    fontWeight:'500'
  },

  accessMenuNewTrainActive: {
    marginLeft:'15px',
    color:"#ffff"  
  },

  accessMenuNewTrainDesactive: {
    marginLeft:'15px',
    color:"#a99f9f"  
  },

  accessTrainAccessTrain: {
    marginLeft:'15px',
    color:"#ffff"
  }
});

export default MainMenu;