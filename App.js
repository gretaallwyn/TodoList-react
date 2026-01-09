
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BlogList from './BlogList';
import BlogDetailsModal from './BlogDetailsModal';

const App = () => {
 const [selectedPost, setSelectedPost] = useState(null); // To manage the selected post
const [modalVisible, setModalVisible] = useState(false); // To control modal visibility

  // Sample blog posts data
const posts = [
    { id: 1, title: "Post 1", content: "Content of Post 1", author: "Author 1", date: "18 Jan", img:  'https://picsum.photos/200/300' },
    { id: 2, title: "Post 2", content: "Content of Post 2", author: "Author 2", date: "19 Jan", img:  'https://images.pexels.com/photos/374827/pexels-photo-374827.jpeg' },
    { id: 3, title: "Post 3", content: "Content of Post 3", author: "Author 3", date: "20 Jan", img:  'https://picsum.photos/300/400'},
    { id: 4, title: "Post 4", content: "Content of Post 4", author: "Author 4", date: "21 Jan", img:  'https://loremflickr.com/320/240'},
    { id: 5, title: "Post 5", content: "Content of Post 5", author: "Author 5", date: "22 Jan", img:  'https://fastly.picsum.photos/id/197/300/400.jpg?hmac=LgKZ2VMTYDYHHx6nELmJ739aVkZ9iokOudMLUZvhqNU'},
  ];

  console.log(posts)

  // Open modal and set selected post
 const openModal = (post) => {
  setSelectedPost(post);
  setModalVisible(true);
 };

  // Close modal
 const closeModal = () => {
 setModalVisible(false);
 setSelectedPost(null);
 };

 return (
 <View style={styles.container}>
 {/* BlogList Component */}
 <BlogList posts={posts} onPostPress={openModal} />

 {/* PostModal Component */}
 <BlogDetailsModal
 visible={modalVisible}
 post={selectedPost}
 onClose={closeModal}
 />
 </View>
 );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#000',
  },
});

export default App;