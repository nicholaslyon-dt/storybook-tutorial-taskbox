import React from 'react';

import Task from './Task';
import { TASK_STATE_ARCHIVED, TASK_STATE_INBOX, TASK_STATE_PINNED } from '../../lib/constants';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: TASK_STATE_INBOX,
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: TASK_STATE_PINNED,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: TASK_STATE_ARCHIVED,
  },
};
