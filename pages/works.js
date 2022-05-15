import {Container, Heading, SimpleGrid} from '@chakra-ui/react';
import Section from '../components/section';
import {WorkGridItem} from '../components/grid-item';
import thumbRestMenu from '../public/images/work/Screenshot (125).png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4} margin="5">
        Portfolio
      </Heading>
      <SimpleGrid columns={[1 ,1 , 1]} gap={6}>
        <Section>
          <WorkGridItem id="restmenu" title="Responsive Online Restaurant Menu" thumbnail={thumbRestMenu}>
            This is a website build with react.js and javascript
          </WorkGridItem>
        </Section>
        
        {/* <Section>
          <WorkGridItem id="restmenu1"  thumbnail={thumbRestMenu1}>
          this website make it possible to view menu items that are available on restaurant on present and order food instead of using some paper menu that is also bad for nature
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works