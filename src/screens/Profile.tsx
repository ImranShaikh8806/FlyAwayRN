import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from '../authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
    const [name, setname] = useState("");
    const dispatch = useDispatch();

    const data1 = [
        { key: 'Saved', icon: 'heart-o' },
        { key: 'My saved cards', icon: 'credit-card' },
        { key: 'Cashback Rewards', icon: 'money' },
        { key: 'PointsMA', icon: 'pinterest-square' },
        { key: 'Coupons', icon: 'suitcase' },
        { key: 'Property Messages', icon: 'commenting-o' },
        { key: 'My Reviews', icon: 'star-o' },
    ];

    const data2 = [
        { key: 'Language', icon: 'language' },
        { key: 'Price display', icon: 'inr' },
        { key: 'Km or mile', icon: 'dashboard' },
        { key: 'Notifications', icon: 'bell-o' },
    ];

    const data3 = [
        { key: 'Help center', icon: 'question-circle-o' },
        { key: 'About us', icon: 'at' },
    ];

    const data4 = [
        { key: 'Sign out from all devices', icon: 'user-o' },
        { key: 'Delete my account', icon: 'user-times' },
    ];

    const fetchData = async () => {
        const token = await AsyncStorage.getItem("token");
        const result = await axios.get("https://backend-flyaway-app.vercel.app/user/profile", {
            headers: { token: token },
        });
        setname(result.data.userProfile.firstName);
        return result.data;
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderSection = (title, data) => (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.header}>{title}</Text>
            <View style={styles.horizontalLine} />
            {data.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => item.key === "Saved" && navigation.navigate("Mybookings")}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name={item.icon} size={25} color="blue" />
                        <Text style={styles.itemText}>{item.key}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <FlatList
            data={[]}
            ListHeaderComponent={() => (
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Welcome, {name}</Text>
                    <TouchableOpacity onPress={() => dispatch(logout())}>
                        <Text style={styles.logoutText}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            )}
            renderItem={null}
            ListFooterComponent={() => (
                <View style={styles.contentContainer}>
                    {renderSection('My account', data1)}
                    {renderSection('Settings', data2)}
                    {renderSection('Information', data3)}
                    {renderSection('Account setting', data4)}
                </View>
            )}
        />
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4b5563",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: 120,
        marginBottom: 24  ,
    },
    welcomeText: {
        color: "white",
        fontSize: 20,
        fontWeight: 500,
    },
    logoutText: {
        color: "white",
        fontSize: 15,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
    },
    icon: {
        marginRight: 20,
    },
    itemText: {
        fontSize: 17,
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginLeft: 10,
        marginBottom: 10,
    },
    header: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 300,
        color: "black",
        marginBottom: 8,
    },
    contentContainer: {
        paddingHorizontal: 10,
    }
});
