import groupModel from "../model/groupModel";
async function AllGroup(req, res) {
    if (req.method === "GET") {
        const data = await groupModel.getAllGroup();
        if (data.length === 0) {
            return res.status(400).send("group not found");
        } else {
            return res.status(200).json(data)
        }
    }
}
async function DetailGroup(req, res) {
    if (req.method === "GET") {
        const idgroup = req.params.id;
        const groupData = await groupModel.getGroupById(idgroup);
        if (groupData.length === 0) {
            return res.status(400).send("group not found");
        } else {
            return res.status(200).json(groupData)
        }
    }
}
export default { AllGroup, DetailGroup }