import styled from "styled-components"
import Image from "next/image";
import logoImg from "../public/images/logo.png";

const ContainerDiv = styled.div`
  padding-left: 28px;
  padding-top: 12px;
`;

export default function LogoDiv() {
  return (
    <ContainerDiv>
      <Image src={logoImg} height={35} alt="logo" />
    </ContainerDiv>
  )
}