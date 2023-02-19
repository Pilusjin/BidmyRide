import * as templates from "../templates/post.mjs";
import * as postMethods from "../api/listings/index.mjs";

export async function getAllPosts() {
    const container = document.querySelector("#posts");
    if (container) {
        const posts = await postMethods.getPosts();
        templates.renderPostList(posts, container);
    }
}

getAllPosts()