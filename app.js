require("./database");

var User = require('./User'),
    Post = require('./Post');


var anik = new User({
    name: "Anik"
});

var puja = new User({
    name: "puja"
})

anik.save();
puja.save();

var post = new Post({
    title: "5 best hub to grow",
    postedBy: anik._id,
    comments: [{
        text: "Nice post!",
        postedBy: puja._id
    }, {
        text: "Thanks :)",
        postedBy: Anik._id
    }]
})

post.save(function(error) {
    if (!error) {
        Post.find({})
            .populate('postedBy')
            .populate('comments.postedBy')
            .exec(function(error, posts) {
                console.log(JSON.stringify(posts, null, "\t"))
            })
    }
});