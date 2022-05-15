import { Button, Container, Box, List, ListItem, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import {ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Home = () => (
    <Layout>
    <Container>
      <Box 
        borderRadius="lg" 
        mb={6}
        p={3}
        align="center"
        marginTop="10px"
        bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, i am a front-end devepoler from tehran !
      </Box>
      <Box display={{ md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" 
          variant="page-title">
            Salar Hosseini
          </Heading>
          <p>Developer, Beat Producer, Gamer, Student and also a Learner</p>
        </Box>

        <Box flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md: 6}} 
          textAlign="center"
        >
          <Box
          borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
          <Image
            src="/images/slrhoseini1.jpg" 
            borderRadius="full"
            alt="Pofile Imae"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Portfolio
        </Heading>
        <Paragraph> There are Projects that i have done so far like a online restaurant menu that i used react and js that make it easy to...
          <NextLink href="/works/restmenu" passHref scroll={false}>
            <Link>
            More
            </Link>
          </NextLink>
      </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />}      colorScheme="teal">
            Portfolio
          </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        On the Web
        </Heading>
        {/* <Paragraph>
        <Link href="https://www.linkedin.com/in/salar-hosseini-a77a10208">
            Linkdin
          </Link>
            {' '}
          -{' '}
        <Link href="https://t.me/Slrhoseini">
            Telegram
          </Link>
            {' '}
          -{' '}
          <Link href="https://instagram.com/slrhoseini">
            Instagram
          </Link>
            {' '}
          -{' '}
          <Link href="https://twitter.com/sikranchez">
            Twitter
          </Link>
            {' '}
          -{' '}
          <Link href="https://discord.gg/zKAmJtMu">
            Discord
          </Link>
          
        </Paragraph> */}

        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/salar-hosseini-a77a10208" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                SalarHosseini
              </Button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="https://github.com/Slrhoseini" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Slrhoseini
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/sikranchez" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                Sikranchez
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/slrhoseini" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Slrhoseini
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'