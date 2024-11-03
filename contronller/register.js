const Register = async (req, res) => {
    if (req.method === "GET") {
        let fileindex = 'register';
        let title = 'Register page';
        return res.render(fileindex, {
            title: title
        });
    } else if (req.method === "POST") {
        const user = req.body;
        const result = await Register(user);
        console.log(result);
        res.redirect("/");
    }
};
export default Register;