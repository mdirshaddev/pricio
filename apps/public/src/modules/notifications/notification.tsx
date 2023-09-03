'use client';

// React
import React, { useEffect } from 'react';

// Shadcn - Toast
import { useToast } from '@shadcn/use-toast';

// Shadcn - Toaster
import { Toaster } from '@shadcn/toaster';

// Lib - firebase
import { getFCMToken, onMessageListener } from 'src/lib/firebase';

interface window extends Window {
  workbox?: any;
}

declare const window: window;

export function ToastNotification(props: React.PropsWithChildren) {
  const { toast } = useToast();

  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
        toast({ title: 'Registration successful' });
      });

      wb.addEventListener('controlling', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('activated', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = (event: any) => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (
          confirm(
            'A newer version of this web app is available, reload to update?'
          )
        ) {
          wb.addEventListener('controlling', (event: any) => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
          );
        }
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
  }, []);

  useEffect(() => {
    getFCMToken();

    onMessageListener().then(payload => {
      toast({
        title: payload.notification?.title,
        description: payload.notification?.body
      });
    });
  }, []);

  const { children } = props;

  return (
    <React.Fragment>
      <Toaster />
      {children}
    </React.Fragment>
  );
}
