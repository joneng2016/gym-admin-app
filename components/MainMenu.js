import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

class MainMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isNewMenuActive: false
    }
  }

  render() {
    return (<View>
      <Text style={styles.generalMenuStructure}>
          <Text
          >
              Cadastrar
          </Text>

          <Text
          >
              Acesssar
          </Text>
      </Text>
    </View>)
  }
}

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