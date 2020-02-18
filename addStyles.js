import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

const addStyles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: '#000',
    color: '#000',
    margin: 15,
    height: 40,
  },
  preview: {
    height: 200,
    width: winWidth,
  },
  takePictureBtnWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    paddingBottom: 10,
  },
  takePictureBtn: {
    fontWeight: 'bold',
    color: '#fff',
  },
  captureImage: {
    alignItems: 'center',
  }
})

export default addStyles;
