import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import {ChevronRightIcon} from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" 
      bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
      p={3} 
      mb={6} 
      align="center"
      marginTop="10px">
        Hello, i am a front-end devepoler from tehran !
      </Box>
      <Box display={{ md:'felx'}}>
        <Box flexGrow={1}>
          <Heading as="h2" 
          variant="page-title">
            Salar Hosseini
          </Heading>
          <p>Developer, Beat Producer, Gamer, Student and also a Learner</p>
        </Box>
        <Box flexShrink={0} 
        mt={{base: 4,md: 0}} 
        ml={{md: 6}} 
        align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} 
          borderStyle="solid" 
          maxWidth="150px" 
          display="inline-block" 
          borderRadius="full" 
          src="/images/slrhoseini1.jpg" 
          alt="Pofile Imae" />
        </Box>
      </Box>
      
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>
            Email
          </BioYear>
          <Link href="mailto:salar_hosseini11@yahoo.com">
          salar_hosseini11@yahoo.com
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>
            2019
          </BioYear>
          Finished highschool and untill present studying Computer Engineering at Shahrood University of Technology
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
        <BioYear></BioYear>
          Html5
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
          CSS
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
          Javascript
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
        ReactJs
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
        NextJs
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
        Chakra UI
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
        Framer Motion
        </BioSection>
        <BioSection>
        <BioYear></BioYear>
        ThreeJs
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph> There are Projects i've done so far like a online restaurant menu that i used react and js, instrumental beats that i produced and some mixtapes that...
<NextLink href="/works/restmenu">
  <Link>
    More
  </Link>
</NextLink>
</Paragraph>
<Box align="center" my={4}>
  <NextLink href="/works">
    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Profile</Button>
  </NextLink>
</Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
        Contact
        </Heading>
        <Paragraph>
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
          
        </Paragraph>
      </Section>

    </Container>
  )
}

export default Page