export function createPubSub() {
  const pubsub = {
    events: new Map()
  };

  pubsub.on = function (event, callback) {
    // TODO: register the callback to trigger when `event` happens
    if (pubsub.events.has(event)) {
      pubsub.events.get(event).push(callback);
    } else {
      pubsub.events.set(event, [callback]);
    }
  };

  pubsub.emit = function (event, data) {
    // TODO: call the callbacks registered for `event`
    (pubsub.events.get(event) || []).forEach((callback) => callback(data));
    (pubsub.events.get("*") || []).forEach((callback) => callback(data));
  };

  // To go further:
  // - add a method off(event, callback) to remove a subscription
  pubsub.off = function (event, callback) {
    const newSubscribersList = pubsub.events
      .get(event)
      .filter((c) => c !== callback);
    pubsub.events.set(event, newSubscribersList);
  };

  // - on('*') to react to all events
  pubsub.onAll = function (callback, data) {
    pubsub.events.forEach((e) => e.forEach((callback) => callback(data)));
  };

  return pubsub;
}
