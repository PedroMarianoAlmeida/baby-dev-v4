import Head from "next/head";
import styled from "styled-components";
import HeroSecction from "../src/components/components/HomePage/HeroSecction";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSecction />
    </Container>
  );
}

const Container = styled.div`
  background-color: #210037;
`;
