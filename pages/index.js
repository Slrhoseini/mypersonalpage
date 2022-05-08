import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, i am a front-end devepoler from tehran !
      </Box>
      <Box display={{ md:'felx'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Slrhoseini
          </Heading>
          <p>Artist, Developer, Producer and also a Student</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page