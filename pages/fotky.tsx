import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Text } from 'react-native';
import Page, { pageMessages } from '../components/Page';
import useIntl from '../hooks/useIntl';
import useTheme from '../hooks/useTheme';

const Fotky: React.FunctionComponent = () => {
  const theme = useTheme();
  const intl = useIntl();
  const title = intl.formatMessage(pageMessages.pageTitlePhotos);

  return (
    <Page title={title}>
      <Text style={theme.heading1}>{title}</Text>
    </Page>
  );
};

export default Fotky;
