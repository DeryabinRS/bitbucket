class Api {

    url = 'https://jsonplaceholder.typicode.com';

    async getPosts(){
        try{
            const response = fetch(`${this.url}/posts`)
            .then(response => response.json())
            return response
        }catch(e){
            console.log(e);
        }
    }

    async getPost(id){
        try{
            const response = fetch(`${this.url}/posts/${id}`)
            .then(response => response.json())
            return response
        }catch(e){
            console.log(e);
        }
    }

}

const api = new Api(config)

export default api