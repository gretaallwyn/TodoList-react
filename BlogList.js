import React from 'react';
import { FlatList } from 'react-native';
import BlogItem from './BlogItem';

const BlogList = ({ posts, onPostPress }) => {
 return (
 <FlatList
 data={posts}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => <BlogItem post={item} onPostPress={onPostPress} />}
 />
 );
};

export default BlogList;
