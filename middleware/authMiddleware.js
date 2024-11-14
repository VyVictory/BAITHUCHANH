const CheckRole = (allowedRoles) => {
    return (req, res, next) => {
        const user = req.session.userdata;
        const username = req.params.username;

        if (!user) {
            return res.status(403).send("Unauthorized");
        }
        const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
        if (
            roles.includes("admin") && user.role === "admin" ||
            roles.includes("user") && user.role === "user" 
        ) {
            return next();
        }
        console.log(`Access denied for user: ${user.username}, role: ${user.role}`);
        return res.status(403).send("Unauthorized");
    };
};
const isAuthorized = (sessionUser, targetUser) => {
    // If there's no logged-in user or the target user isn't defined
    if (!sessionUser || !targetUser) return false;

    // Allow access if the usernames match or if the logged-in user is an admin
    return (
        sessionUser.username === targetUser.username ||
        (sessionUser.role === "admin" && targetUser.role === "user")
    );
};
function authToken(req,res,next) {
    const token= req.headers['authorization'];
    if(!token) return res.status(401).json({mess: "Access Denied"});
    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err) return res.status(403).json({mess:"Invalid token"});
        req.user = user
        next();
    })
    
}
export default {CheckRole, isAuthorized, authToken};
