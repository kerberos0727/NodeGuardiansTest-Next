import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType  } from 'next';
import { baseLink } from '@/config';
import styled from 'styled-components';
import { darkTheme } from '@/styles/theme';
import { IGuardianSummnaryData } from '@/types/interface';
import LogoDiv from '@/components/LogoDiv';
import GuardianCard from '@/components/GuardianCard';

const ContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 78px;
	padding-bottom: 108px;

	@media (min-width: 640px) {
		padding-top: 108px;
		padding-bottom: 138px;
	}

	@media (min-width: 1024px) {
		padding-top: 138px;
		padding-bottom: 168px;
	}
`;

const GridContainer = styled.div`
	display: grid;
	gap: ${darkTheme.spacing['4xs']};
  grid-template-columns: auto;

	@media (min-width: 640px) {
		gap: ${darkTheme.spacing.s};
	}

	@media (min-width: 768px) {
		gap: ${darkTheme.spacing.m};
		grid-template-columns: auto auto;
	}

	@media (min-width: 1280px) {
		gap: ${darkTheme.spacing.xl};
		grid-template-columns: auto auto auto;
	}
`;

export const getServerSideProps: GetServerSideProps<{ guardiansList: Array<IGuardianSummnaryData> }> = async () => {
	const res = await fetch(baseLink + "/api/quests");
	const guardiansList = await res.json();	
	return {
    props: {
      guardiansList
    },
  }
}

export default function Home({ guardiansList }: InferGetServerSidePropsType<typeof getServerSideProps>) {	
	console.log("guardiansList", guardiansList);
	
	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main>
				<LogoDiv/>
				<ContainerDiv>
					<GridContainer>
						{guardiansList.map((_element: IGuardianSummnaryData, _index: number) => {
							return (
								<GuardianCard key={_index} {..._element}></GuardianCard>
							)
						})}
					</GridContainer>
				</ContainerDiv>
			</main>
		</>
	);
}
