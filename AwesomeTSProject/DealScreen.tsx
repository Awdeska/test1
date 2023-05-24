import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, AppDispatch, RootState } from "./store/store";
import {Button, FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import NavigationProps from "./interfaces/Navigation";

interface Customer {
    c_ID: number;
    Passport: string;
    Name: string;
    Phone: string;
    Home_Phone: string;
    Surname: string;
    Mail: string;
}

const DealScreen = (props: {navigation: NavigationProps}) => {

    function fetchData() {
        const customer1: Customer = {
            c_ID: 1,
            Passport: "123456",
            Name: "Michael",
            Surname: "Johnson",
            Phone: "555-1111",
            Home_Phone: "555-2222",
            Mail: "michael.johnson@example.com",
        };
        const customer2: Customer = {
            c_ID: 2,
            Passport: "654321",
            Name: "Lisa",
            Surname: "Smith",
            Phone: "555-3333",
            Home_Phone: "555-4444",
            Mail: "lisa.smith@example.com",
        };
        const customers: Customer[] = [customer1, customer2];

        setCustomers(customers);
    }

    const [customers, setCustomers] = useState<Customer[]>([]);
    /* const dispatch = useDispatch<AppDispatch>();
    const { customers: data, loading, error } = useSelector((state: RootState) => state.customers);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        if (!loading && data) {
            setCustomers(data);
        }
    }, [data, loading]);

    const handleFetchData = () => {
        dispatch(fetchData());
    }; */
    const renderDealItem = ({ item }: { item: Customer }) => (
        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => console.log(item)}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>ID: {item.c_ID}</Text>
                <Text style={styles.itemText}>Имя: {item.Passport}</Text>
                <Text style={styles.itemText}>Фамилия: {item.Surname}</Text>
                <Text style={styles.itemText}>Email: {item.Mail}</Text>
            </View>
        </TouchableHighlight>
    );

    return (

        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('View')}>
                    <Text style={styles.buttonText}>Просмотр</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Create')}>
                    <Text style={styles.buttonText}>Создать</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={customers}
                keyExtractor={(item) => item.c_ID.toString()}
                renderItem={renderDealItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
    /* return (
        <View>
            <Button title="Получить данные" onPress={handleFetchData} />
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <FlatList
                    data={customers}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>ID: {item.id}</Text>
                            <Text>Имя: {item.Passport}</Text>
                            <Text>Фамилия: {item.Surname}</Text>
                            <Text>Email: {item.Mail}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    ); */
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    list: {
        marginTop: 20,
        width: "100%",
    },
    itemContainer: {
        backgroundColor: "#f9f9f9",
        padding: 10,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
    },
    separator: {
        height: 1,
        backgroundColor: "#ccc",
    },
});

export default DealScreen;
