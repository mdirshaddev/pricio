// Firebase messaging
import { getToken, getMessaging } from 'firebase/messaging';

// Service - Firebase Cloud messaging
import { app } from 'src/services/firebase';

// Localforage
import localforage from 'localforage';

// Shadcn - Toast
import { toast } from '@shadcn/use-toast';

/**
 * The function `getFCMToken` checks if the browser supports notifications, requests permission from
 * the user if needed, and fetches a token if permission is granted.
 * @param setTokenFound - setTokenFound is a function that takes a boolean value as an argument and
 * updates the state of a variable indicating whether a token has been found or not.
 */
export const getFCMToken = () => {
  if (!('Notification' in window)) {
    // Check if the browser supports notifications
    toast({
      variant: 'destructive',
      title: 'Notification API not supported',
      description: "Your browser doesn't support this API"
    });
  } else if (Notification.permission === 'granted') {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    fetchToken();
  } else if (Notification.permission !== 'denied') {
    // We need to ask the user for permission
    Notification.requestPermission().then(
      (permission: NotificationPermission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          fetchToken();
        }
      }
    );
  }
};

/**
 * The function fetchToken is an asynchronous function that checks if an FCM token already exists and
 * generates a new one if it doesn't.
 * @param setTokenFound - The `setTokenFound` parameter is a function that is used to update the state
 * of a boolean variable indicating whether a token has been found or not. It is a React state setter
 * function that takes a boolean value as an argument and updates the state accordingly.
 * @returns a boolean value. If a FCM token already exists, it returns false. If a new FCM token is
 * generated and stored, it returns true.
 */
async function fetchToken() {
  try {
    if ((await localforage.getItem('fcm_token')) !== null) {
      console.log('FCM token already exists');

      return false;
    }
    console.log('it is creating it.');
    const messaging = getMessaging(app);
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
    });
    if (currentToken) {
      localforage.setItem('fcm_token', currentToken);
      console.log('fcm_token', currentToken);
    } else {
      // Show permission request UI
      console.log(
        'NOTIFICACION, No registration token available. Request permission to generate one.'
      );
      toast({
        variant: 'destructive',
        title: 'No registration token available',
        description: 'Request permission to generate one.'
      });
      // ...
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
}
