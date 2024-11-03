import home from "../contronller/home";
import homeModel from "../model/homeModel";
function getAll(req, res) {
    homeModel.getAllUser().then((data) => {
        res.json(data);
    })
        .catch((err) => {
            res.status(500).send(err);
        });
}
function getOne(req, res) {
    homeModel.getUserByUsername(req.params.username).then((data) => {
        res.json(data);
    })
        .catch((err) => {
            res.status(500, err);
        });
}
async function addOne(req, res) {
    const user = req.body;
    homeModel.addUser(user).then(() => {
        res.json("Success");
    })
        .catch((err) => {
            res.status(500).send(err);
        });
}
async function updateOne(req, res) {
    if (req.method === "PUT") {
        const oldUsername = req.body.oldUsername;
        const user = {
            username: req.body.username,
            fullname: req.body.fullname,
            address: req.body.address,
            sex: req.body.sex,
            email: req.body.email,
        };
        homeModel.updateUser(oldUsername, user).then(() => {
            res.json("Success");
        })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}
async function deleteOne(req, res) {
    const username = req.params.username;
    const user = await homeModel.getUserByUsername(username);
    if (!user) {
        return res.status(404).send("User not found");
    }
    homeModel.deleteUser(username).then(() => {
        res.json("Success");
    })
        .catch((err) => {
            res.status(500).send(err);
        });
}
export default { getAll, getOne, addOne, updateOne, deleteOne };