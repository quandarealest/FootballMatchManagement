import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import AddStyles from './addStyles';

export default class Add extends Component {
  camera = null;
  state = {
    hasCameraPermission: null,
    name: '',
    address: '',
    capacity: '',
  }

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

    this.setState({ hasCameraPermission });
  };

  takePicture = () => {
    this.camera.takePictureAsync({ skipProcessing: true, base64: true }).then((data) => {
      this.setState({
          photo: data.base64
      })
    })
  }

  handleNameInput = (text) => {
    this.setState({
      name: text
    })
  }

  handleAddress = (text) => {
    this.setState({
      address: text
    })
  }

  handleCapacity = (text) => {
    this.setState({
      capacity: text
    })
  }

  submitNewField = () => {
    const { photo, name, address, capacity } = this.state;
    const { addNewField } = this.props;
    addNewField({ photo, name, address, capacity });
  }

  render() {
    const { hasCameraPermission, photo } = this.state;
    let base64Photo = null;
    if(photo) {
      base64Photo = 'data:image/jpeg;base64,' + photo.replace(/\n|\r/g, "")
    }
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
        return <Text>Access to camera has been denied.</Text>;
    }
    return (
      <View>
        <Camera
          style={AddStyles.preview}
          ref={camera => this.camera = camera}
        >
          <View>
            <TouchableOpacity style={AddStyles.takePictureBtnWrapper} onPress={this.takePicture}>
              <Text style={AddStyles.takePictureBtn}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
        {(photo && base64Photo) && (
          <View style={AddStyles.captureImage}>
            <Image style={{ width: 150, height: 100 }} source={{ uri: base64Photo }} />
          </View>
        )}
        <TextInput style={AddStyles.input} onChangeText={this.handleNameInput} placeholderTextColor="#000" placeholder = "Stadium Name" autoCapitalize="words" />
        <TextInput style={AddStyles.input} onChangeText={this.handleAddress} placeholderTextColor="#000" placeholder = "Address" />
        <TextInput style={AddStyles.input} onChangeText={this.handleCapacity} placeholderTextColor="#000" placeholder = "Capacity" />
        <Button color='#f194ff' title="Add New Field" onPress={this.submitNewField} />
      </View>
    )
  }
}
