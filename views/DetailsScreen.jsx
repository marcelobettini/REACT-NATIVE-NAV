import { View, Text, Image,TouchableNativeFeedback} from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
      <Image 
      source={require('../assets/home.png')}/>
      </TouchableNativeFeedback>      
    </View>
  );
}

