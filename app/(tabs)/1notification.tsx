import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const notifications = [
    {
        title: "HIMSI Fasilkom",
        description: "telah menambahkan pengumuman baru.",
        time: "1 hari yang lalu",
        image: require('../../assets/Bea.jpg'),
    },
    {
        title: "HMM FT",
        description: "telah menambahkan pengumuman baru.",
        time: "3 hari yang lalu",
        image: require('../../assets/bi.jpg'),
    },
    {
        title: "HMKL FKM",
        description: "telah menambahkan pengumuman baru.",
        time: "1 minggu yang lalu",
        image: require('../../assets/fkm.jpg'),
    },
    {
        title: "HMM FT",
        description: "telah menambahkan pengumuman baru.",
        time: "1 minggu yang lalu",
        image: require('../../assets/Bea.jpg'),
    },
    {
        title: "HIMSI Fasilkom",
        description: "telah mengupdate jadwal seminar.",
        time: "2 hari yang lalu",
        image: require('../../assets/fkm.jpg'),
    },
    {
        title: "HMM FT",
        description: "telah mengadakan workshop.",
        time: "4 hari yang lalu",
        image: require('../../assets/bi.jpg'),
    },
    {
        title: "HMKL FKM",
        description: "telah membuka pendaftaran.",
        time: "2 minggu yang lalu",
        image: require('../../assets/Bea.jpg'),
    },
    {
        title: "HMM FT",
        description: "telah merayakan ulang tahun.",
        time: "3 minggu yang lalu",
        image:  require('../../assets/fkm.jpg'),
    }
];

export default function NotificationScreen() {
    
    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.notificationItem}>
                        <Image 
                            source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                            style={styles.image} 
                        />
                        <View>
                            <Text style={styles.notificationTitle}>
                                {item.title} <Text style={styles.notificationDescription}>{item.description}</Text>
                            </Text>
                            <Text style={styles.notificationTime}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 12,
    },
    notificationTitle: {
        fontWeight: '600',
        flexWrap: 'wrap',
        width: 200,
    },
    notificationDescription: {
        fontWeight: 'normal',
        flexWrap: 'wrap',
    },
    notificationTime: {
        color: '#888',
    },
});
