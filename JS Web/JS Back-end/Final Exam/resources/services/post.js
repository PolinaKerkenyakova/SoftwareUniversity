const Post = require('../models/Post');
const User = require('../models/User');

async function createPost(postData, userId) {

    const post = await new Post(postData);
    await post.save();

    const user = await User.findById(userId);
    user.myPosts.push(post._id);
    await user.save();

    return post;
}

async function getAllPosts() {
    const posts = await Post.find({}).lean();
    return posts;
}

async function getPostById(id) {
    const post = await Post.findById(id).lean();
    return post;
}

async function deletePost(id) {
    await Post.findByIdAndDelete(id);
}

async function editPost(postId, postData) {
    const post = await Post.findById(postId);
    post.title = postData.title;
    post.keyword = postData.keyword;
    post.location = postData.location;
    post.creationDate = postData.creationDate;
    post.image = postData.image;
    post.description = postData.description;

    await post.save();
    return post;
}


async function upVotePost(postId, userId) {
    const post = await Post.findById(postId);

    post.postVotes.push(userId);
    post.postRating += 1;

    await post.save();
}

async function downVotePost(postId, userId) {
    const post = await Post.findById(postId);

    post.postVotes.push(userId);
    post.postRating -= 1;

    await post.save();
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    deletePost,
    editPost,
    upVotePost,
    downVotePost
}