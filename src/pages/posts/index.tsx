import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';
import { getPrismicClient } from '../../services/prismic';
import * as Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
    
      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, non.</strong>
            <p>Iste, velit earum quo quaerat, cum magni itaque, distinctio non dolor laboriosam corrupti recusandae culpa optio similique sequi laudantium asperiores!</p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, non.</strong>
            <p>Iste, velit earum quo quaerat, cum magni itaque, distinctio non dolor laboriosam corrupti recusandae culpa optio similique sequi laudantium asperiores!</p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, non.</strong>
            <p>Iste, velit earum quo quaerat, cum magni itaque, distinctio non dolor laboriosam corrupti recusandae culpa optio similique sequi laudantium asperiores!</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType('publication', {
    pageSize: 20,
    fetch: ['publication.title', 'publication.content']
  })

  console.log(response);

  return {
    props: {

    }
  }
}