import { View, Text, Button} from 'react-native';
import { styles } from '../styles/styles';
export default function ProfileScreen({navigation, route}) {
  const {name} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text style={styles.mb}>Welcome {name}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}