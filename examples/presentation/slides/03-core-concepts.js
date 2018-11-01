import React from 'react';
import { storiesOf } from '@storybook/react';

import { TitlePage } from '../components/page';
import Heading from '../components/heading';
import Hr from '../components/hr';

storiesOf('Slides|core', module).add('concepts', () => (
  <TitlePage>
    <Heading type="main" mods={['centered']}>
      Abstraction, Isolation, Autonomy
    </Heading>
  </TitlePage>
));

storiesOf('Slides|core', module)
  .add('abstraction', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        Good abstraction is the 🔑 to good software
      </Heading>
      <Hr />
      <Heading type="sub" mods={['centered']}>
        If you create abstractions where you shouldn't you'll get <strong>complexity</strong>
      </Heading>
      <Heading type="sub" mods={['centered']}>
        If you don't create abstractions where you should you'll get <strong>complexity</strong>
      </Heading>
    </TitlePage>
  ))
  .add('knight', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        If developers are like 🤺 fighting complexity...
      </Heading>
    </TitlePage>
  ))
  .add('dragon', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        Complexity is the 🐉
      </Heading>
      <Heading type="sub" mods={['centered']}>
        If we fail to ⚔️ it effectively, we feed it.
      </Heading>
    </TitlePage>
  ))
  .add('understanding', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        To create correct abstractions
      </Heading>
      <Heading type="sub" mods={['centered']}>
        We must understand the problem well
      </Heading>
    </TitlePage>
  ))
  .add('art of war', () => (
    <TitlePage>
      <blockquote>
        “If you know the enemy and know yourself, you need not fear the result of a hundred battles.
        <br />
        If you know yourself but not the enemy, for every victory gained you will also suffer a
        defeat.
        <br />
        If you know neither the enemy nor yourself, you will succumb in every battle.”
      </blockquote>
      <Heading type="sub" mods={['centered']}>
        ― Sun Tzu, The Art of War
      </Heading>
    </TitlePage>
  ));

storiesOf('Slides|core', module)
  .add('isolation', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        Isolation is the possible result of good abstraction
      </Heading>
    </TitlePage>
  ))
  .add('swappable', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        An isolated component can be swapped by a similar one 🔃
      </Heading>
    </TitlePage>
  ))
  .add('API', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        The API of your component
      </Heading>
      <Heading type="sub" mods={['centered']}>
        Isolated pieces will have some API for communication
      </Heading>
      <Heading type="sub" mods={['centered']}>
        It's this api, <em>the props if you will,</em> that will determine if your component will be
        😍 or 🤬.
      </Heading>
    </TitlePage>
  ))
  .add('how much', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        The trade off in isolation ⚖️
      </Heading>
      <Heading type="sub" mods={['centered']}>
        If your component isolates too much...
      </Heading>
      <Heading type="sub" mods={['centered']}>
        The API will either have to grow to compensate for it's multitude of use-cases; increasing
        the <strong>complexity</strong>.
      </Heading>
    </TitlePage>
  ));

storiesOf('Slides|core', module)
  .add('conclusion', () => (
    <TitlePage>
      <Heading type="sub" mods={['centered']}>
        When components:
      </Heading>
      <ul>
        <li>Abstract the right amount of stuff</li>
        <li>Isolate enough but to too much</li>
        <li>Have a good API to do things</li>
      </ul>
      <Heading type="sub" mods={['centered']}>
        then...
      </Heading>
    </TitlePage>
  ))
  .add('less changes', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        They won't have to change as often
      </Heading>
      <Heading type="sub" mods={['centered']}>
        And when they do, their use-cases are limited 👌
      </Heading>
    </TitlePage>
  ))
  .add('re-use', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        It's easier to re-use 👏
      </Heading>
    </TitlePage>
  ))
  .add('autonomy', () => (
    <TitlePage>
      <Heading type="main" mods={['centered']}>
        Autonomy
      </Heading>
    </TitlePage>
  ));
