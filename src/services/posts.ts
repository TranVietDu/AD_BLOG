import http from '../http-common';
class PostData {
  getAll() {
    return http.get('/posts');
  }
  get(id: string) {
    return http.get(`/posts/${id}`);
  }
}
export default new PostData();
