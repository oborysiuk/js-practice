const axios = require("axios").default;

test('Get all posts [/posts] and verify number', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const responseBody = response.data;
    expect(response.status).toBe(200);
    expect(responseBody).toHaveLength(100);
})

test('Get all comments for the 9th post [/posts/9] and verify the last comment`s author', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/9/comments');
    const responseBody = response.data;
    expect(response.status).toBe(200);
    expect(responseBody[responseBody.length - 1].name).toBe('autem illo facilis');
})

test('Get 15th post [/posts] and verify uderId, id, title & body', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/15');
    const responseBody = response.data;
    expect(responseBody.userId).toBe(2);
    expect(responseBody.id).toBe(15);
    expect(responseBody.title).toBe('eveniet quod temporibus');
    expect(responseBody.body).toBe('reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae')
})

test('Create new post [/posts] and verify response is successful', async()=>{
    const newPost = {
        title: 'This is a new post',
        body: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta',
        userId: 18
    }
    
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    const responseData = response.data;

    expect(response.status).toBe(201);
    expect(responseData.userId).toBe(newPost.userId);
    expect(responseData.title).toBe(newPost.title);
    expect(responseData.body).toBe(newPost.body);
    })

test('Update the 2nd post [/posts/2] and verify response is successful', async()=>{
    const updatedPost = {
        id: 2,
        title: 'This is a new post title',
        userId: 18,
        body: "This is an updated post body"
    }
    
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/2', updatedPost);
    const responseData = response.data;

    expect(response.status).toBe(200);
    expect(responseData.userId).toBe(updatedPost.userId);
    expect(responseData.title).toBe(updatedPost.title);
    expect(responseData.body).toBe(updatedPost.body);
    })