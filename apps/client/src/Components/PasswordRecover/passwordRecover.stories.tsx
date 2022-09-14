import React from 'react';
import { storiesOf } from '@storybook/react';

import PasswordChange from './passwordChange';
import RecoverForm from '.';

// eslint-disable-next-line @cspell/spellchecker
const token = 'aksjdkasjhdkahdkashdkasjdhaskjdhakjdhksjhda';

storiesOf('Components/Recover', module).add('recover', () => <RecoverForm />);

storiesOf('Components/Recover', module).add('confirmed email', () => (
  <PasswordChange token={token} />
));
