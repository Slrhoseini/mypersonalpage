import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hotger">
    <Container>
      <Title>
        Hotger <Badge>2022</Badge>
      </Title>
      <P>
      This website make it possible to view menu items that are available on restaurant on present and order food instead of using some paper menu that is also bad for nature
      </P>
      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, React</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Slrhoseini/online-restaurant-menu">
            Online Restaurant Menu Source Code<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/work/Screenshot (123).png" alt="Hotger" />
      <WorkImage src="/images/work/Screenshot (125).png" alt="Hotger" />
      <WorkImage src="/images/work/Screenshot (121).png" alt="Hotger" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://soundcloud.com/slrhoseini/hichkas-to-koja-boodi-salar-remix"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work

