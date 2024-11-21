import express from 'express';

const posts = [
    {
        id: 1,
        description: "This is the first post",
        image: "https://placecat.com/louie/300/200",
    },
    {
        id: 2,
        description: "This is the second post",
        image: "https://placecat.com/louie/300/200",
    },
    {
        id: 3,
        description: "This is the third post",
        image: "https://placecat.com/louie/300/200",
    },
    {
        id: 4,
        description: "This is the fourth post",
        image: "https://placecat.com/louie/300/200",
    },
    {
        id: 5,
        description: "This is the fifth post",
        image: "https://placecat.com/louie/300/200",
    }
];

function getPostById(id) {
    return posts.findIndex((post) => post.id === Number(id));
};

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get("/posts/:id", (req, res) => {
    const index = getPostById(req.params.id);
    res.status(200).json(posts[index]);
});