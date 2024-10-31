
const Logout = async (req, res) => {
    if (req.method === "GET") {
        req.session.destroy()
        return res.redirect("/");
    }
}
export default Logout;