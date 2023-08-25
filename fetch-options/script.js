const createPost = ({ title, body }) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // .then((res) => res.json())
    // .then((data) => console.log(data));
    method: "POST",
    //we need to stringify the object

    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/JSON",
      token: "asdfkhuheg",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

createPost({ title: "my post", body: "this is my post" });
