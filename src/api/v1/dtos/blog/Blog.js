class BlogDTO {
    constructor(blogId, blogCategoryId, userId, title, thumbnail, introduction, content, createdAt, modifiedAt, views) {
        this.blogId = blogId,
            this.blogCategoryId = blogCategoryId,
            this.userId = userId,
            this.title = title,
            this.thumbnail = thumbnail,
            this.introduction = introduction,
            this.content = content,
            this.createdAt = createdAt,
            this.modifiedAt = modifiedAt,
            this.views = views
    }
};
module.exports = BlogDTO;