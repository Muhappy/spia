// Profile.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <ImageBackground source={{uri: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.coverPhoto}/>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://avatar.iran.liara.run/public/boy' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <FontAwesome name='pencil' type="font-awesome-5" size={16} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Rifko Akbar</Text>
          <Text style={styles.profileDetails}>rifko.akbar11@gmail.com | +628811881188</Text>
        </View>

        <View style={styles.optionContainer}>
          <OptionItem icon="id-card" text="Ubah Informasi Profil" />
          <OptionItem icon="bell" text="Notifikasi"  />
          <OptionItem icon="language" text="Bahasa"  />
        </View>

        <View style={styles.optionContainer}>
          <OptionItem icon="question-circle" text="Bantuan & Dukungan" />
          <OptionItem icon="comments" text="Hubungi Kami" />
          <OptionItem icon="lock" text="Kebijakan Privasi" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface OptionItemProps {
  icon: any,
  text: string
}

const OptionItem = ({ icon, text, }:OptionItemProps) => (
  <TouchableOpacity style={styles.optionItem}>
    <View style={styles.optionLeft}>
      <FontAwesome name={icon} type="font-awesome-5" size={16} />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  profileHeader: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  coverPhoto: {
    height: 150,
    width: '100%',
  },
  profileImageContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  editIcon: {
    position: 'absolute',
    bottom: 3,
    right: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileInfo: {
    marginTop: 50,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDetails: {
    color: '#6B7280',
  },
  optionContainer: {
    width: '90%',
    marginTop: 20,
  },
  optionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  optionRightText: {
    color: '#3B82F6',
  },
});
