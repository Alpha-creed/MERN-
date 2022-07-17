import mongoose from "mongoose";
import PostMeassage from "../models/postMessage.js"

export const getPosts = async(req, res) => {
    try {
        const postMeassage = await PostMeassage.find();
        res.status(200).json(postMeassage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async(req, res) => {
    const post = req.body;

    const newPost = new PostMeassage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async(req, res) => {
    const { id: _id } = req.params
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id")

    const updatePost = await PostMeassage.findByIdAndUpdate(_id, {...post, _id }, { new: true });

    res.json(updatePost)
}

export const deletePost = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    await PostMeassage.findByIdAndRemove(id)

    res.json({ message: "Post deleted successfully" })
}

export const likePost = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    const post = await PostMeassage.findById(id)

    const updatedPost = await PostMeassage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
}