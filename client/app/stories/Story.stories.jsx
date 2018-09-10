import 'font-awesome/scss/font-awesome.scss';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../components/Story';
import css from '../styles/_legacy.scss';

storiesOf('Story', module)
  .add('no options', () => (
    <div className={`${css.gridTwoItemBoxLight} gridTwoItemBoxLight`}>
      <Story name="Real Moment" link="some-url" />
    </div>
  ))
  .add('all options', () => (
    <div className={`${css.gridTwoItemBoxLight} gridTwoItemBoxLight`}>
      <Story
        actions={{
          edit: 'some-url',
          delete: 'bluh',
          viewers: 'blah',
        }}
        name="Real Moment"
        link="some-url"
        categories={['FRIENDS', 'FAMILY']}
        moods={['ANXIOUS', 'HELPFUL']}
        date="Created 2 Days ago"
        draft="Draft"
        storyType="Some Type"
        storyBy="Some Person"
      />
    </div>
  ));