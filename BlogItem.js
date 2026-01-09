import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BlogItem = ({ post, onPostPress }) => {
 return (
  <TouchableOpacity style={styles.item} onPress={() => onPostPress(post)}>
      <Image source={{uri:post.img}} style ={{width:'100%', height: 200}}/>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.date}>{post.date}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default BlogItem;


// ### Explanation of Updates
// 1. **`BlogListModal.js`**:
//    - The modal logic is abstracted into a separate reusable component.
//    - It accepts three props:
//      - `visible`: Determines whether the modal is visible.
//      - `post`: The post to display (null if no post is selected).
//      - `onClose`: A callback to handle modal closing.

// 2. **`App.js`**:
//    - Manages the state (`selectedPost` and `modalVisible`) and passes them to the `BlogListModal` component.
//    - Ensures separation of concerns, making `App.js` responsible for managing state and coordinating components.

// 3. **Other Components** (`BlogList.js` and `BlogItem.js`):
//    - Unchanged, still responsible for rendering the blog list and individual items.

// ---

// ### Benefits
// - **Separation of Concerns**: The modal logic is decoupled from `App.js`, improving maintainability.
// - **Reusability**: The `BlogListModal` component can now be reused elsewhere in the app.
// - **Clean Architecture**: Each component has a single responsibility.

// This structure is modular, clean, and adheres to best practices for React Native development.


