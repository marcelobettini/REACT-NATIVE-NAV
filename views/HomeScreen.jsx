import {View, Text, Button} from 'react-native';
import { styles } from '../styles/styles'; 

export default function HomeScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.mb}>Home Screen</Text>
      <Button      
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button      
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

