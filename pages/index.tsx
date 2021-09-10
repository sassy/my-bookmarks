import fs from 'fs'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react"


type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<any> = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Center bg="#458BD9" h="100px" color="white">
          俺のブックマーク
        </Center>
      </header>

      <main>
        <Flex color="white" w="100%">
          <SimpleGrid columns={3} spacing={6}>
        {props.bookmarks.map((item: string) => (
          <Box key={item} bg="#59C7F0" p={4} color="black">
            <a href={item}>{item}</a>
          </Box>
        ))}
          </SimpleGrid>
        </Flex>
      </main>

      <footer>
        created by Sassy.
      </footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ()  => {
  const bookmarks = fs.readFileSync(process.cwd() + '/docs/bookmark.txt', 'utf8').trim().split(/\n/);

  return {
    props: {
      bookmarks : bookmarks
    },
  }
}
