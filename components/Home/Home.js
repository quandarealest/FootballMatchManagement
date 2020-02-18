import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, FlatList, Button } from 'react-native';
import HomeStyles from './homeStyles';

const fieldData = [
    {
        id: 1,
        image: 'https://cdn10.bigcommerce.com/s-3grxgs5/products/116/images/573/CHE_940_Stamford_bridge_13_W__28857.1454808339.1280.1280.jpg?c=2',
        name: 'Stamford Bridge',
        capacity: '41.631',
        address: 'Fulham Rd, Fulham, London SW6 1HS, UK'
    },
    {
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/c0/21/29/manchester-united-museum.jpg',
        name: 'Old Trafford',
        capacity: '76.000',
        address: 'Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK'
    },
    {
        id: 3,
        image: 'https://cdn1.everyevery.ng/wp-content/uploads/2019/03/25114246/tottenham-stadium.jpg',
        name: 'White Hart Lane',
        capacity: '36.284',
        address: '748 High Rd, Tottenham, London N17 0AP, UK'
    }
]

class Home extends Component{

  goToAbout = (item) => {
    const { navigation } = this.props;
    navigation.navigate('About', item)
   }
   render() {
    return (
      <View style={HomeStyles.container}>
        <FlatList 
          data={fieldData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({item}) => {
            return (
            <TouchableOpacity onPress={() => this.goToAbout(item)} style={HomeStyles.pictureWrapper} key={item.id}>
              <Image style={HomeStyles.picture} source= {{ uri: item.image }}/>
              <View style={HomeStyles.descriptionWrapper}>
                <Text>{item.name}</Text>
                <Text>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )}}
        />
        <Button color='#f194ff' title="Add New Field" onPress={() => this.props.navigation.navigate('Add')} />
      </View>
   )
   }
}
export default Home