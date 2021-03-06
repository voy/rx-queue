export { DebounceQueue }      from './debounce-queue'
export { DelayQueue }         from './delay-queue'
export { RxQueue }            from './rx-queue'
export { ThrottleQueue }      from './throttle-queue'

import { DelayQueueExecutor }  from './delay-queue-executor'

export {
  DelayQueueExecutor,

  // Bug compatible with ISSUE #40
  // https://github.com/huan/rx-queue/issues/40
  DelayQueueExecutor as DelayQueueExector,
}
