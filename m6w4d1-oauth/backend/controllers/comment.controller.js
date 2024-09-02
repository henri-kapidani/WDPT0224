import Comment from '../models/Comment.js';

// POST /recipes/:recipeId/comments
export const createOne = async (req, res) => {
    const recipeId = req.params.recipeId;
    const commentInfo = req.body;

    const newComment = new Comment({ ...commentInfo, recipe: recipeId });
    const createdComment = await newComment.save();

    return res.send({
        data: createdComment,
    });
};

// recipes/:recipeId/comments
export const readAll = async (req, res) => {
    console.log(req.loggedUser);
    const comments = await Comment.find({
        recipe: req.params.recipeId,
    }).populate('recipe', { _id: 0, title: 1 });

    return res.send({
        data: comments,
    });
};
