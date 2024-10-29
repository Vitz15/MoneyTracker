import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {Header} from '../../components/molecules';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header type="ProfilePicture" />
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <Text style={styles.subtext}>Your Balance</Text>
        <Text style={styles.maintext}>Rp. 10.000.000</Text>
        <View style={styles.linewrapper}>
          <View style={styles.line} />
        </View>
        <Text style={styles.subtext}>Cash on Hand Rp. 4.000.000</Text>
        <Text style={styles.subtext2}>Cash on Bank Rp. 6.000.000</Text>
      </View>
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <Text style={styles.subtext}>Add Transaction</Text>
        <View>
          <Button
            text="Cash on Hand"
            onPress={() => navigation.navigate('CashonHand')}
          />
        </View>
        <View style={styles.buttongap}>
          <Button
            text="Cash on Bank"
            onPress={() => navigation.navigate('CashonBank')}
          />
        </View>
      </View>
      <Gap height={25} />
      <View style={styles.contentWrapper} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 230,
    paddingHorizontal: 24,
    paddingTop: 13,
  },
  subtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  subtext2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingTop: 11,
  },
  maintext: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    textAlign: 'center',
  },
  line: {
    width: 341,
    paddingLeft: 24,
    height: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  linewrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 20,
  },
  buttongap: {
    marginTop: 15,
  },
});
