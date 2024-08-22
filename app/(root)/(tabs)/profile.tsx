import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://images.pexels.com/photos/17771457/pexels-photo-17771457/free-photo-of-santosh7321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} // Replace with actual profile picture URL
        style={styles.profileImage}
      />
      <Text style={styles.name}>Santosh Kumar</Text>
      <Text style={styles.email}>santoshkumar@example.com</Text>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Profile;
