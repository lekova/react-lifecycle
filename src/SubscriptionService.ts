// Just a mock of a service that would provide some data at regular intervals

import * as _ from 'lodash';

interface Window {
  SubscriptionService: any;
}

interface SubscriptionService {
  subscribe: (callback: (message?: any) => any) => number;
  publish: (message?: any) => any;
  subscribers: { [key: number]: (message?: any) => any };
  unsubscribe: (subscriberId: number) => boolean;
}

let lastSubscriber = 0;

if (!(<any>window).SubscriptionService) {
  const service: SubscriptionService = {
    subscribers: [],
    subscribe: (callback: (message?: any) => any) => {
      const subscriberId = lastSubscriber;
      lastSubscriber++;
      service.subscribers[subscriberId] = callback;
      return subscriberId;
    },
    publish: (message: any) => {
      Object.values(service.subscribers).forEach((callback: (message?: any) => any) => callback(message));
    },
    unsubscribe: (subscriberId: number) => {
      return service.subscribers[subscriberId] ? delete service.subscribers[subscriberId] && true : false;
    }
  };
  (<any>window).SubscriptionService = service;

  randomPublish(service, 2000);
}

function randomPublish(service: SubscriptionService, interval: number) {
  service.publish(`Random publish interval ${interval}`);
  setTimeout(() => randomPublish(service, _.random(1000, 5000)), interval);
}

export default (<any>window).SubscriptionService;
