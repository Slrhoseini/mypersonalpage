import {
  Button, Container, Box, Heading, Link
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import {ChevronRightIcon} from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio';

const Bio = () => (
  <Layout>
  <Container>
  <Section>
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
      Phone Number
    </BioYear>
    <Link>
    09190620533
    </Link>
  </BioSection>
  <BioSection>
    <BioYear>
    Birth Date
    </BioYear>
    1999
  </BioSection>
  <BioSection>
    <BioYear>
    Sex
    </BioYear>
    Male
  </BioSection>
  <BioSection>
    <BioYear>
    Marital Status
    </BioYear>
    Single
  </BioSection>
  <BioSection>
    <BioYear>
      City
    </BioYear>
    Tehran
  </BioSection>
  <BioSection>
    <BioYear>
    Field of Study
    </BioYear>
    Computer Engineering
  </BioSection>
</Section>

<Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph> My name is Salar Hosseini, im 22 years old and i live in Tehran.<br></br>
        im studying Computer Engineering at Shahrood University of Technology and beside coding and website design i also produce instrumental beats.
</Paragraph>
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

  <Box align="center" my={4}>
  <NextLink href="/works" passHref scroll={false}>
    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Works</Button>
  </NextLink>
</Box>
</Section>
</Container>
</Layout>


)

export default Bio

