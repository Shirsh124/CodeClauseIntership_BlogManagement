import Comment from "../model/comment.js";
export const newComment = async (request, response) => {
  try {
    const comment = await new Comment(request.body);
    comment.save();
    return response.status(200).json({ msg: "Comment saved successfully" });
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

export const getComments = async (request, response) => {
  try {
    const comments = await Comment.find({ postId: request.params.id });
    return response.status(200).json(comments);
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};

export const deleteComment = async (request, response) => {
  try {
    await Comment.findByIdAndDelete(request.params.id);
    return response.status(200).json({ msg: "Comment deleted successfully" });
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};
