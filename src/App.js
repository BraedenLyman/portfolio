import '@radix-ui/themes/styles.css';
import { Heading, Theme, Flex } from '@radix-ui/themes';
import './App.css';

function App() {
  return (
    <Theme appearance="dark" accentColor="indigo" panelBackground="solid">
      <Flex direction="column" gap="5">
        <Heading size="9" className="heading">Hi. I'm Braeden.</Heading>
        <Heading size="9" className="heading2">A Developer.</Heading>
      </Flex>
    </Theme>
  );
}
export default App;
