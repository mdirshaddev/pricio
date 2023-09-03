'use client';

// Firebase
import {
  type MessagePayload,
  onMessage,
  getMessaging
} from 'firebase/messaging';

// Service - Firebase cloud messaging
import { app } from 'src/services/firebase';

/**
 * The function `onMessageListener` returns a promise that resolves with a `MessagePayload` when a
 * message is received from Firebase Cloud Messaging.
 */
export const onMessageListener = (): Promise<MessagePayload> =>
  new Promise((resolve: (value: MessagePayload) => void) => {
    const messaging = getMessaging(app);
    onMessage(messaging, payload => {
      resolve(payload);
    });
  });
