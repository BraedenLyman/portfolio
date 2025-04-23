import '@radix-ui/themes/styles.css';
import { Heading, Theme, Flex, Tabs, Box, Text, Card, Avatar } from '@radix-ui/themes';
import QKImage from './images/qk.png';
import './App.css';

function App() {
  return (
    <Theme appearance="dark" accentColor="indigo" panelBackground="solid">
      <Flex direction="column" gap="5">
        <Tabs.Root defaultValue="work">
          <Tabs.List className='tabGroup'>
            <Tabs.Trigger value="work">Work</Tabs.Trigger>
            <Tabs.Trigger value="about">About</Tabs.Trigger>
            <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="work" className="sections">
            <Heading className="heading">
              <Text>Hi. I'm Braeden. <br/> A Developer.</Text>
            </Heading>
            <Text className='subHeading'>
              I live for crafting experiences that don't just work beautifully, but work beautifully for everyone.
            </Text>
            <div className='projectSection'>
              <div className='projectRows'>
                <Card className="card1">
                  <Text className='projTitle'>Quote Kong</Text>
                  <Text className='projSubTitle'></Text>
                  <img src={QKImage}/>
                </Card>

                <Card className='card2'>
                  <Text className='projTitle'>Airplane Identification</Text>
                  <Text className='projSubTitle'></Text>
                </Card>
              </div>

              <div className='projectRows'>
                <Card className="card3">
                  <Text className='projTitle'>ViB Inc.</Text>
                  <Text className='projSubTitle'></Text>
                </Card>

                <Card className='card4'>
                  <Text className='projTitle'>Chris' Site</Text>
                  <Text className='projSubTitle'></Text>
                </Card>
              </div>

              <div className='inProgress'>
                <Heading className="inProgressHeader">
                  <Text>In Progress.</Text>
                </Heading>
                <Text className='inProgressSubHeader'>
                  I live for crafting experiences that don't just work beautifully, but work beautifully for everyone.
                </Text>
              </div>

              <div className='projectRows'>
                <Card className="card5">
                  <Text className='projTitle'>Lyman Rentals</Text>
                  <Text className='projSubTitle'></Text>
                </Card>

                <Card className='card6'>
                  <Text className='projTitle'>Wired Auto</Text>
                  <Text className='projSubTitle'></Text>
                </Card>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="about" className="sections">
            <Heading className="heading">
              <Text>I'm Braeden.</Text>
            </Heading>
          </Tabs.Content>

          <Tabs.Content value="contact" className="sections">
            <Text>Edit your profile or update contact information.</Text>
          </Tabs.Content>
        
        </Tabs.Root>
      </Flex>
    </Theme>
  );
}
export default App;
