import styled from 'styled-components';
import { darkTheme } from '@/styles/theme';
import Link from 'next/link';
import { IGuardianSummnaryData } from '@/types/interface';
import DifficultStar from './DifficultStar';

const GuardiansCard = styled.div`
  cursor: pointer;
	width: 330px;
	background: ${darkTheme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: ${darkTheme.radius.l};
	padding: ${darkTheme.spacing["4xs"]};
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  max-height:150px;
	border-radius: ${darkTheme.radius.l};
`;

const TitleSpan = styled.span`
  margin-top: ${darkTheme.spacing["5xs"]};
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;
	color: ${darkTheme.colors.white};
`;

const GridContainer = styled.div`
	margin-top: ${darkTheme.spacing["5xs"]};
	display: grid;
  grid-template-columns: 20% 30% 25% 25%;
`;

const GridItem = styled.div`
  padding-top: ${darkTheme.spacing["5xs"]};
	padding-bottom: ${darkTheme.spacing["5xs"]};
	text-align: start;
`;

const DetailSpan = styled.span`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-transform: capitalize;
	color: ${(props) => (props.color ? props.color : darkTheme.colors.white)};
`;


export default function GuardianCard(props: IGuardianSummnaryData) {
  return (
    <Link href={"/guardian/" + props.id} legacyBehavior >
      <GuardiansCard>
        <CardImage src={props.cover}></CardImage>
        <TitleSpan>
          {props.title}
        </TitleSpan>
        <GridContainer>
          <GridItem>
            <DetailSpan color={darkTheme.colors.gold}>Skill tree</DetailSpan>								
          </GridItem>
          <GridItem>
            <DetailSpan color={darkTheme.colors.blue}>{props.skillTree}</DetailSpan>
          </GridItem>
          <GridItem>
            <DetailSpan color={darkTheme.colors.gold}>Difficulty</DetailSpan>			
          </GridItem>
          <GridItem>
            <DifficultStar difficult={props.difficulty} size={10}></DifficultStar>
          </GridItem>
          <GridItem>
            <DetailSpan color={darkTheme.colors.gold}>Skill</DetailSpan>			
          </GridItem>
          <GridItem>
            <DetailSpan>{props.skill}</DetailSpan>
          </GridItem>
          <GridItem>
            <DetailSpan color={darkTheme.colors.gold}>Experience</DetailSpan>			
          </GridItem>
          <GridItem>
            <DetailSpan>{props.experience}</DetailSpan>
          </GridItem>
          <GridItem>
            <DetailSpan color={darkTheme.colors.gold}>Type</DetailSpan>			
          </GridItem>
          <GridItem>
            <DetailSpan>{props.type}</DetailSpan>
          </GridItem>
          <GridItem>
            <DetailSpan color={darkTheme.colors.gold}>Gold</DetailSpan>			
          </GridItem>
          <GridItem>
            <DetailSpan>{props.gold}</DetailSpan>
          </GridItem>
        </GridContainer>
      </GuardiansCard>
    </Link>
  )
}