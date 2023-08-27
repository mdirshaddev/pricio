'use client';

// React
import React from 'react';

// Shadcn - Toast
import { ToastAction } from '@shadcn/toast';
import { Toaster } from '@shadcn/toaster';
import { useToast } from '@shadcn/use-toast';

interface window extends Window {
  workbox?: any;
}

declare const window: window;

export function ToastNotification(props: React.PropsWithChildren) {
  const { children } = props;

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
        toast({ title: 'Your App is now cached available for offline use' });
      });

      wb.addEventListener('controlling', (event: any) => {
        //
      });

      wb.addEventListener('activated', (event: any) => {
        //
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
          wb.messageSW({ type: 'SKIP_WAITING' });
        } else {
          console.log(
            'User rejected to reload the web app, keep using old verion. New verion will be automatically load when user open the app next time.'
          );
        }
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);
      wb.addEventListener('externalwaiting', promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', (event: any) => {
        //
      });

      /*
      wb.addEventListener('redundant', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('externalinstalled', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('externalactivated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      */

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Toaster />
      {children}
    </React.Fragment>
  );
}
