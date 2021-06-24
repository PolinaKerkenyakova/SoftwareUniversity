class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!` 
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (this._likes.find(u => u == username)) {
            throw new Error(`You can't like the same story twice!`);
        }

        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        let user = this._likes.find(u => u == username);

        if (user === undefined) {
            throw new Error(`You can't dislike this story!`);
        }

        return `${username} disliked ${this.title}`;
    }


    comment(username, content, id) {
        if (!id || (this._comments.find(c => c.id == id)) === undefined) {
            id = this._comments.length + 1;
            let comment = {id, username, content, replies: {}};
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }

        if (this._comments.find(c => c.id == id)) {
            const commentToReply = this._comments.find(c => Object.values(c)[0] == id);
            commentToReply.replies[`${id}.${Object.values(commentToReply.replies).length + 1}`] = { id: `${id}.${Object.values(commentToReply.replies).length + 1}`, username, content };
            return `You replied successfully`;  
        }
    }

    toString(sortingType) {
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:',];

        const typesToSort = {
            'asc': function (comments) {
                Object.values(comments).forEach((c) => {
                    result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                    Object.values(c.replies).forEach((r) => {
                        result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
                });
                return result.join('\n');
            },
            'desc': function (comments) {
                comments.sort((a, b) => b.id - a.id).forEach((o) => {
                    result.push(`-- ${o.id}. ${o.username}: ${o.content}`);

                    Object.values(o.replies).sort((a, b) => b.id - a.id).forEach(r => {
                        result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
                });
                return result.join('\n');
            },
            'username': function (comments) {
                comments.sort((a, b) => a.username.localeCompare(b.username)).forEach(o => {
                    result.push(`-- ${o.id}. ${o.username}: ${o.content}`);

                    Object.values(o.replies).sort((a, b) => a.username.localeCompare(b.username)).forEach(r => {
                        result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
                });
                return result.join('\n');
            }
        }
        return typesToSort[sortingType](this._comments);
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));