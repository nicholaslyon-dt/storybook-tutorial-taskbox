import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { PureInboxScreen } from './Inbox';
import { SCREENS_FOLDER } from '../../lib/constants-storybook';
import * as TaskListStories from '../../stories/task-list/TaskList.stories';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  component: PureInboxScreen,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  title: `${SCREENS_FOLDER}Inbox`,
};

const Template = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};
