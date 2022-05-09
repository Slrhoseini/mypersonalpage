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
            Slrhoseini
          </Heading>
          <p>Artist, Developer, Producer and also a Student</p>
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
          src="/images/slrhoseini.jpg" 
          alt="Pofile Imae" />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph> His property of repetition defines a fundamental spatial frequency
that can be used to give a first approximation to
the periodic pattern where symbols with subscript 1 are constants that determine the amplitude and phase of this first approximation
A much better approximation of the periodic pattern can
be built up by adding an appropriate combination of harmonics to
this fundamental (sine-wave) pattern. For example, adding
Here, symbols with subscripts are constants that determine the amplitude and phase of each harmonic contribution..
<NextLink href="/works/inkdrop">
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
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>
            1999
          </BioYear>
          Born in Tehran, Iran.
        </BioSection>
        <BioSection>
          <BioYear>
            2019
          </BioYear>
          Finished highschool and untill present studying Computer Engineering at Shahrood University of Technology
        </BioSection>
      </Section>
      <Section delay={0.3}>
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