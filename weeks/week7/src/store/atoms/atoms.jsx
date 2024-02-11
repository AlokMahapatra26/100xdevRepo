import { atom , selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key:"NetworkAtom",
    default : selector({
        key : "networkAtomSelector",
        get : async () => {
            const res = await axios.get("http://localhost:4000/notifications");
            return res.data;
        }
    })
})



export const TotalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.networks + 
        allNotifications.jobs +
        allNotifications.messages + 
        allNotifications.notifications
    }
})