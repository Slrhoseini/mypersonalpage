import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/Hichkas.jpg'
import thumbHowToUseInkdrop from '../public/images/japan2.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Hichkas - To Koja Boodi Remix"
            thumbnail={thumbPortfolio}
            href="https://soundcloud.com/slrhoseini/hichkas-to-koja-boodi-salar-remix"
          />
          <GridItem
            title="Salar - Cigarettes in Japan [Instrumental]"
            thumbnail={thumbHowToUseInkdrop}
            href="https://soundcloud.com/slrhoseini/cigarettes-in-japan-instrumental"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
