import { updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./../firebase-config";

class Notification{
    constructor(message, time, uid){
        this.message = message;
        this.time = time;
        this.uid = uid;
    }
}

const sendNotification = async (notifications, uid, message) => {
    console.log(uid, message);
    const userRef = doc(db, "users", uid).withConverter(notificationConverter);
    try {
        let notification = new Notification(message, new Date(Date.now), uid);
        await updateDoc(userRef, { notifications: [notification, ...notifications]});
    } catch (error) {
        return error
    }
};

const notificationConverter = {
    toFirestore: (notification) => {
        return {
            message: notification.message,
            time: notification.time,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Notification(data.message, data.time, data.uid);
    }
}

const markAllRead = async (notifications, uid) => {
    let newNotifs = [];
    for(let notif of notifications){
        const tempNotif = notif;
        tempNotif.isRead = true;
        newNotifs = [...newNotifs, tempNotif];
    }
    const ref = doc(db, "users", uid).withConverter(notificationConverter);
    await setDoc( {
        notifications: newNotifs
    });
}

export { markAllRead, sendNotification, Notification };