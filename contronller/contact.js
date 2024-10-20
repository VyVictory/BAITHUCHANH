const ContactController = (req, res) => {
    // res.render("main", {
    //     title: "Contact Page",
    //     body: "contact",
    // });
    let fileindex = 'main';
    let title = 'Contact Page';
    let body = 'contact';
    return res.render(fileindex, {
        title: title,
        body: body
    });
}
export default ContactController;