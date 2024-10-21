import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BorderCircle = ({
  diameter = 110,
  borderColor = '#8D92A3',
  borderWidth = 2,
  innerPadding = 10, // You can adjust this value to control the size of the inner circle
}) => {
  return (
    <View
      style={[
        styles.circle,
        {
          width: diameter,
          height: diameter,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}>
      <View
        style={[
          styles.innerContent,
          {
            width: diameter - innerPadding * 2.3, // Shrink the width of the inner content
            height: diameter - innerPadding * 2.3, // Shrink the height of the inner content
          },
        ]}>
        <Text style={styles.addPhotoText}>Add</Text>
        <Text style={styles.addPhotoText}>Photo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 9999, // Large value to ensure circular shape
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto', // Centers the outer circle horizontally
  },
  innerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Set background color
    borderRadius: 9999, // Maintain circular shape for inner content
  },
  textWrapper: {
    alignItems: 'center', // Center the text vertically
  },
  addPhotoText: {
    color: '#8D92A3', // Text color to match the border color
    fontSize: 14,
  },
});

export default BorderCircle;
