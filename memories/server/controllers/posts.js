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