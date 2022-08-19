import { Image, TouchableNativeFeedback, View, Text, FlatList } from 'react-native';
import { styles } from '../styles/styles';
import useFetch from '../helpers/useFetch';
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5ff475ea07084b96bc8176a66872ce46'


export default function HomeScreen({ navigation }) {
  const [data, error, isLoading] = useFetch(url)
  console.log('data', data.articles);
  console.log('error', error);
  console.log('isLoading', isLoading);
  
  return isLoading ? 

  (  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reading news feed...</Text>
    </View>)
      :
      error ?
    (  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Error reading feed: {error}.</Text>
    </View>)
    :
    (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text>Home Screen</Text>
      <FlatList
         data={data.articles}
       ListHeaderComponent={
        <Text style={styles.heading}>Latest News</Text>
      }
      // keyExtractor={item => item.publishedAt}
      renderItem={({item}) => <Text key={item.publishedAt}>{item.title}</Text>}>


      </FlatList>
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around" }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Profile', { name: "Lupe" })}>
          <Image
            style={styles.tabIcon}
            source={require('../assets/profile.png')} />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Config')}>
          <Image
            style={styles.tabIcon}
            source={require('../assets/config.png')} />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

