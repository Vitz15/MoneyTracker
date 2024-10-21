import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('./gambar/Profile.jpg')}
        />
        <Text style={styles.name}>Jonathan Vito Taufik</Text>
        <Text style={styles.title}>Computer Science</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.sectionContent}>
          Email: S22210132@student.unklab.ac.id
        </Text>
        <Text style={styles.sectionContent}>Phone: 08998332906</Text>
        <Text style={styles.sectionContent}>Address: Airmadidi</Text>
        <Text style={styles.sectionContent}>Religion: Kristen Protestan</Text>
        <Text style={styles.sectionContent}>Citizenship: Indonesia</Text>
        <Text style={styles.sectionContent}>Status: Single</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionContent}>
          Have done field work practice at the regent's office
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionContent}>Computer Science (2022-2026)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>Python</Text>
        <Text style={styles.sectionContent}>C++</Text>
        <Text style={styles.sectionContent}>HTML</Text>
        <Text style={styles.sectionContent}>Word</Text>
        <Text style={styles.sectionContent}>Excel</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: '#F0F8FF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#B0E0E6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#4682B4',
    borderWidth: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000080',
  },
  title: {
    fontSize: 18,
    color: '#5F9EA0',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#E0FFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000080',
    marginBottom: 10,
  },
  sectionContent: {
    fontWeight: '800',
    fontSize: 16,
    color: '#4682B4',
    marginBottom: 5,
  },
});

export default App;
