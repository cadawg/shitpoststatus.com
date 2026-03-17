import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useReward } from 'react-rewards';

const Reward = forwardRef(({ type, config, children }, ref) => {
  const id = useRef(`reward-${Math.random().toString(36).slice(2)}`).current;
  const { reward } = useReward(id, type, config);

  useImperativeHandle(ref, () => ({
    rewardMe: reward,
  }));

  return <span id={id}>{children}</span>;
});

export default Reward;