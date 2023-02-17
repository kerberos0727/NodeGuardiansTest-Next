import Head from 'next/head';
import { baseLink } from '@/config';
import { InferGetServerSidePropsType, GetStaticPaths, GetStaticProps } from 'next';
import { IGuardianFullData } from '@/types/interface';
import styled from 'styled-components';

import LogoDiv from "@/components/LogoDiv";
import GuardianDetail from '@/components/GuardianDetail';

const ContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  padding: 50px 0px 80px 0px;
`;

export const getStaticPaths: GetStaticPaths = async () => {  
  return {
    paths: [{ params: { guardianId: '1' } }],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<{ guardianDetail: IGuardianFullData }> = async (context) => {
  const apiLink = baseLink + "/api/quests/" + (context.params ? context.params.guardianId : "");
	const res = await fetch(apiLink);
	const guardianDetail = await res.json();	
	return {
    props: {
      guardianDetail
    },
  }
}

export default function GuardianDetailPage({ guardianDetail }: InferGetServerSidePropsType<typeof getStaticProps>) {  
  console.log("guardianDetail",guardianDetail);
  
  return (
    <>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>
			<main>
        <LogoDiv />
        <ContainerDiv>
          <GuardianDetail {...guardianDetail} />
        </ContainerDiv>
			</main>
		</>
  )
}