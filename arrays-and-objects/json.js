const post = {
    title: "Post 1",
    id: 1,
    body: "This is the body"
}

//convert to JSON string
const str = JSON.stringify(post)

console.log(str)
//{"title":"Post 1","id":1,"body":"This is the body"}

//you use these with local storage. You can only store strings.

//Parse puts it back into an object
obj = JSON.parse(str)
console.log(obj)
//{ title: 'Post 1', id: 1, body: 'This is the body' }

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the body'
    }
]

const str2 = JSON.stringify(posts)
console.log(str2)