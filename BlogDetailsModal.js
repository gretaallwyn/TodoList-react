import React from 'react';
import { View, Text, Modal, StyleSheet, Button, Image } from 'react-native';

const BlogDetailsModal = ({ visible, post, onClose }) => {
 if (!post) return null; // Return null if there's no selected post

 return (
 <Modal
 animationType="fade"
 transparent={true}
 visible={visible}
 onRequestClose={onClose}
 >
 <View style={styles.modalContainer}>
 <View style={styles.modalContent}>
 <Image source={{uri:post.img}} style ={{width:'100%', height: 200}}/>
 <Text style={styles.modalTitle}>{post.content}</Text>
 <Text style={styles.modalAuthor}> {post.author}</Text>
 <Text style={styles.modalDate}>{post.date}</Text>
 <Button title="Close" style={styles.closeButton} onPress={onClose} />
 </View>
 </View>
 </Modal>
 );
};

const styles = StyleSheet.create({
 modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  margin:20
 },
 modalTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  margin:10,
 },
modalContent: {
    width: '100%', // Center modal width
    height: '45%', // Adjust height to occupy the center
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  closeButton: {
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
 modalAuthor: {
 fontSize: 18,
 color: 'gray',
 },
modalDate: {
 fontSize: 18,
 color: 'gray',
 },
});

export default BlogDetailsModal;
