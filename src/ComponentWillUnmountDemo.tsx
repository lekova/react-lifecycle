import React, { Component } from 'react'
import subscriptionService from './SubscriptionService';

export default class ComponentWillUnmountDemo extends Component {
  subscriberId: number | null = null;

  componentDidMount() {
    // You can call setState() immediately (in general, not applicable here)
    // Which will update the state, requiring another render(), but the previous
    // render() will not be pushed to the DOM (meaning no actual repaint)
    //
    // Be careful about doing this, could cause issues. Better to initialize state
    // in the constructor
    console.log('componentDidMount() runs');
    this.subscriberId = subscriptionService.subscribe((message: any) =>
      console.log(`ComponentWillUnmountDemo.componentDidMount(): message received: ${message}`)
    );
  }

  componentWillUnmount() {
    subscriptionService.unsubscribe(this.subscriberId);
    console.log('ComponentWillUnmountDemo.componentWillUnmount(): unsubscribed');
  }

  render() {
    return (
      <div>
        <h2>componentWillUnmount() Demo</h2>
        <p>Check the console to see a running subscription.</p>
        <p>Then choose another route on the left, and note the console message about unsubscribing.</p>

      </div>
    )
  }
}
