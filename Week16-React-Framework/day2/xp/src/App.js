import React, { Component } from 'react';
import { ErrorBoundary } from './component/ErrorBoundary';
import { Color } from './component/Color';
import Show from './component/Unmounted';
import { BuggyCounter } from './component/BuggyCounter';


export default class App extends Component {

  render() {
    
    return (
      <div>
        
        <h4>Click on the numbers to increase the counters.</h4>
        <h4>The counter is programmes to throw error when is reaches 5. This simulates a JavaScript error in a component.</h4><hr />
        <p>These two counters are inside the same error boundary. if one crahses, the error boundary will replacce both of them</p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary><hr />
        
        <p>These two counters are each inside of their error boundary. So if one crahses, the other is not affected</p>
        <ErrorBoundary> <BuggyCounter /> </ErrorBoundary>
        <ErrorBoundary> <BuggyCounter /> </ErrorBoundary><hr />
        <p>This counter is not inside of boundary/. So if crashes, all other components are deleted</p>
        <BuggyCounter />

        <Color />
        <Show />
      </div>
    );
  }
}
