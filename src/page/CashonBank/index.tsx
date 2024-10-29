import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Transaction} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const CashonBank = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header
        text="Cash On Bank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <View>
          <TextInput label="Description" placeholder="Add the description" />
        </View>
        <View style={{marginTop: 17}}>
          <TextInput label="Type" placeholder="Debit / Credit" />
        </View>
        <View style={{marginTop: 22}}>
          <Button text="Save" />
        </View>
      </View>
      <Gap height={24} />
      <Transaction />
    </ScrollView>
  );
};

export default CashonBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 296,
    paddingHorizontal: 24,
    paddingTop: 13,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
});
