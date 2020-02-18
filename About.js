import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';

import AboutStyles from './aboutStyles';

class About extends Component{
  render() {
    const { navigation } = this.props;
    const regex = new RegExp('\"', "g");
    const imageURL = JSON.stringify(navigation.getParam('image')).replace(regex, '');
    const name = JSON.stringify(navigation.getParam('name')).replace(regex, '');
    const capacity = JSON.stringify(navigation.getParam('capacity')).replace(regex, '');
    const address = JSON.stringify(navigation.getParam('address')).replace(regex, '');
    console.log(imageURL)
    return (
        <View style={AboutStyles.container}>
          <Image style={AboutStyles.picture} source= {{ uri: imageURL }} />
          <Text style = {AboutStyles.fieldName}>{name}</Text>
          <Text>{capacity}</Text>
          <Text>{address}</Text>
        </View>
    )
  }
}
export default About