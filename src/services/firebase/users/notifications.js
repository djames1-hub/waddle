import { updateDoc, doc, setDoc, Timestamp, getDoc } from "firebase/firestore";
import { db } from "./../firebase-config";

class Notification{
    constructor(message, time, uid, isRead){
        this.message = message;
        this.time = time;
        this.uid = uid;
        this.isRead = isRead;
    }
}

const sendNotification = async (notifications, uid, message) => {
    console.log(uid, message);
    const userRef = doc(db, "users", uid);
    try {
        let notification = {
            message,
            time: Timestamp.fromDate(new Date()),
            uid,
            isRead: false
        }
        await updateDoc(userRef, { notifications: [notification, ...notifications]});
    } catch (error) {
        return error
    }
};

const getNotifications = async (uid) => {
    try {
        const userRef = doc(db, "users", uid);
        const docSnap = await getDoc(userRef);
        return docSnap.data().notifications;
    } catch (error) {
        return error;
    }
}

const notificationConverter = {
    toFirestore: (notification) => {
        return {
            message: notification.message,
            time: notification.time,
            isRead: notification.isRead
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Notification(data.message, data.time, data.uid, data.isRead);
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

export { markAllRead, sendNotification, getNotifications ,Notification };