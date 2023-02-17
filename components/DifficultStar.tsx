import starEmptyImg from "../public/images/star-emply.png";
import starFullImg from "../public/images/star-full.png";
import Image from "next/image";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  gap: 3px;
`;

const DifficultStar = (props: { difficult: number, size: number}) => {  
  return (
    <ContainerDiv>
      {Array.from(Array(5).keys()).map((_element, _index) => {
        return (
          <div key={_index}>
            {props.difficult >= _index + 1 ? 
              <Image src={starFullImg} alt="logo" height={props.size}></Image>
              :
              <Image src={starEmptyImg} alt="logo" height={props.size}></Image>
            }
          </div>
        )
      })}
    </ContainerDiv>
  )
}

export default DifficultStar;