import Image from "next/image";
import styled from "styled-components";
import { darkTheme } from "@/styles/theme";
import { IGuardianFullData } from "@/types/interface";
import DifficultStar from "../DifficultStar";
import tArrowLImg from "../../public/images/t-arrow-l.png";
import tArrowRImg from "../../public/images/t-arrow-r.png";
import expImg from "../../public/images/exp.png";

const ContainerDiv = styled.div`
  background: ${darkTheme.colors.lighterBlack};
  border-radius: ${darkTheme.radius.l};
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  padding: 4px 3px;
	width: 100%;
  @media (min-width: 640px) {
		width: 70%;
	}
  @media (min-width: 1024px) {
		width: 750px;
	}
  padding-bottom: ${darkTheme.spacing.s};
`;

const CardImage = styled.img`
  width: 100%;
	border-radius: ${darkTheme.radius.l};
`;

const TitleDiv = styled.div`
  margin-top: ${darkTheme.spacing["4xs"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${darkTheme.spacing["3xs"]};
`;

const TitleSpan = styled.span`
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
  @media (min-width: 640px) {
		font-size: 18px;
	}
  @media (min-width: 1024px) {
		font-size: 20px;
	}
	line-height: 27px;
	text-transform: capitalize;
	color: #FFFFFF;
`;

const TitleArrowImg = styled.img`
  height: 6px;
  @media (min-width: 640px) {
		height: 9px;
	}
  @media (min-width: 1024px) {
		height: 12px;
	}
`;

const GridContainer = styled.div`
  width: 100%;
  padding: 0px ${darkTheme.spacing["4xs"]};
	margin-top: ${darkTheme.spacing["5xs"]};
	display: grid;
  grid-template-columns: 20% 30% 25% 25%;
  @media (min-width: 640px) {
		grid-template-columns: 15% 35% 15% 35%;
	}
`;

const GridItem = styled.div`
  padding-top: ${darkTheme.spacing["4xs"]};
	padding-bottom: ${darkTheme.spacing["4xs"]};
	text-align: start;
  font-family: 'Lato';
	font-size: 14px;
	line-height: 17px;
	text-transform: capitalize;
  color: ${(props) => (props.color ? props.color : darkTheme.colors.white)};
`;

const DescriptionSpan = styled.span`
  width: 100%;
  padding: 0px ${darkTheme.spacing["3xs"]};
  margin-top: 10px;
  color: ${darkTheme.colors.grey};
  font-family: 'Lato';
	font-size: 14px;
	line-height: 17px;
`;

const QuestRewardDiv = styled.div`
  width: 100%;
  padding: 0px ${darkTheme.spacing["3xs"]};
  margin-top: ${darkTheme.spacing["4xl"]};
  display: flex;
  flex-direction: column;
  gap: ${darkTheme.spacing["4xs"]};
`;

const QuestRewardTitleSpan = styled.span`
  font-family: 'Cinzel';
	font-size: 14px;
  color: ${darkTheme.colors.white}
`;

const QuestRewardContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const QuestRewardExpDiv = styled.div`
  border: 1px solid ${darkTheme.colors.gold};
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const QuestRewardExpContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, rgba(7, 15, 29, 0), rgba(54, 77, 137, 0.5)););
  font-family: 'Cinzel';
	font-size: 11px;
  color: ${darkTheme.colors.white}
`;

const GoBackButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: 'Cinzel';
	font-size: 12px;
  font-weight: bold;
  color: ${darkTheme.colors.white};
  border: 1px solid ${darkTheme.colors.gold};
  background: transparent;
  cursor: pointer;
  border-radius: ${darkTheme.radius.s};
`;

const GuardianDetail = (props: IGuardianFullData) => {
  return (
    <ContainerDiv>
      <CardImage src={props.cover}></CardImage>
      <TitleDiv>
        <TitleArrowImg src={tArrowLImg.src}></TitleArrowImg>
        <TitleSpan>
          {props.title}
        </TitleSpan>
        <TitleArrowImg src={tArrowRImg.src}></TitleArrowImg>
      </TitleDiv>
      <GridContainer>
        <GridItem color={darkTheme.colors.gold}>
          Skill tree
        </GridItem>
        <GridItem>
          {props.skillTree}
        </GridItem>
        <GridItem color={darkTheme.colors.gold}>
          Difficulty
        </GridItem>
        <GridItem>
          <DifficultStar difficult={props.difficulty} size={13}></DifficultStar>
        </GridItem>
        <GridItem color={darkTheme.colors.gold}>
          Skill
        </GridItem>
        <GridItem>
          {props.skill}
        </GridItem>
        <GridItem color={darkTheme.colors.gold}>
          Quest type
        </GridItem>
        <GridItem>
          {props.type}
        </GridItem>
      </GridContainer>
      <DescriptionSpan>
        {props.description}
      </DescriptionSpan>
      <QuestRewardDiv>
        <QuestRewardTitleSpan>QUEST REWARDS</QuestRewardTitleSpan>
        <QuestRewardContentDiv>
          <QuestRewardExpDiv>
            <Image src={expImg} alt="exp" height={18}></Image>
            <QuestRewardExpContentDiv>{props.rewards.experience}</QuestRewardExpContentDiv>
          </QuestRewardExpDiv>
          <GoBackButton
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go Back
          </GoBackButton>
        </QuestRewardContentDiv>
      </QuestRewardDiv>
    </ContainerDiv>
  )
}

export default GuardianDetail;