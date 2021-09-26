import axios from "axios";

export default class PostService {
    static async getAll () {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data.map((post) => ({
                id: post.id,
                title: post.title,
                key: 'social',
                description: post.body
            }))
        } catch (e) {
            console.log(e);
        }
    }
}