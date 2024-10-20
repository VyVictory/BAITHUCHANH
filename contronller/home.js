import homeModel from "../model/homeModel";

const getAllUser = async (req, res) => {
    let fileindex = 'main';
    let title = 'Home Page';
    let body = 'home';
    const users = await homeModel.getAllUser();
    return res.render(fileindex, {
        title: title,
        body: body,
        rows: users,
    });
}
const addUser = async (req, res) => {
    if (req.method === "GET") {
        let fileindex = 'main';
        let title = 'Home Page';
        let body = 'user/add';
        const users = await homeModel.getAllUser();
        return res.render(fileindex, {
            title: title,
            body: body,
            rows: users,
        });
    } else if (req.method === "POST") {
        const user = req.body;
        const result = await homeModel.addUser(user);
        console.log(result);
        res.redirect("/");
    }
};
const deleteUser = async (req, res) => {
    if (req.method === "GET") {
        const username = req.query.username;
        const user = await homeModel.getUserByUsername(username);
        if (!user) {
            return res.status(404).send("not user");
        }
        res.render("main", {
            title: "Delete User",
            body: "user/delete",
            user: user,
        });
    } else if (req.method === "POST") {
        const username = req.body.username;
        const result = await homeModel.deleteUser(username);
        console.log(result);
        res.redirect("/");
    }
};
const updateUser = async (req, res) => {
    if (req.method === "GET") {
        const username = req.query.username;
        const user = await homeModel.getUserByUsername(username);
        res.render("main", {
            title: "Home Page ",
            body: "user/update",
            user: user,
        });
    } else if (req.method === "POST") {
        const oldUsername = req.body.oldUsername;
        const user = {
            username: req.body.username,
            fullname: req.body.fullname,
            address: req.body.address,
            sex: req.body.sex,
            email: req.body.email,
        };
        const result = await homeModel.updateUser(oldUsername, user);
        console.log(result);
        res.redirect("/");
    }
};

const detailUser = async (req, res) => {
    if (req.method === "GET") {
        const username = req.query.username;
        const user = await homeModel.getUserByUsername(username);
        res.render("main", {
            title: "Home Page ",
            body: "user/detail",
            user: user,
        });
    }
};
export default { getAllUser, addUser, updateUser, deleteUser,detailUser };
// const getHomePage = (req, res) => {
//     return res.render('home', { body: './component/mainHome' });
// };

// const getAboutPage = (req, res) => {
//     return res.render('home', { body: './component/mainAbout' });
// };

// const getContactPage = (req, res) => {
//     return res.render('home', { body: './component/mainContact' });
// };

// export { getHomePage, getAboutPage, getContactPage };
//#######d controller
