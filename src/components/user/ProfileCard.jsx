import styled from "styled-components";
import myImage from "../../assets/img/random-avatar.png"
import {useEffect, useState} from "react";
import {getAuthToken, getUserId} from "../../util/Auth";

export const UserProfileCard = () => {

    const [userInfo, setUserInfo] = useState(null);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        async function fetchUserInfo() {
            const response = await fetch(`http://localhost:8085/users/info/id/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setUserInfo(data);
        }
        fetchUserInfo();
    }, []);

    if (!userInfo) {
        return <p>Loading...</p>;
    }


    return (
        <Card>
            <UpperContainer>
                <ImageContainer>
                    <img src={myImage} alt='' height='100px' width='100px' />
                </ImageContainer>
            </UpperContainer>
            <LowerContainer>
                <StyledH3> { userInfo.username } </StyledH3>
                <StyledH4> Member since: {userInfo.createdAt}  </StyledH4>
                <StyledH4> Golfklubb: {userInfo.golfClub}  </StyledH4>
                <StyledH4> Handikapp: {userInfo.handicap}  </StyledH4>
                <StyledH4> Plats: {userInfo.location}  </StyledH4>
                <StyledP> About </StyledP>
                <StyledButton>Visit page</StyledButton>
            </LowerContainer>
        </Card>
    )
}

const Card = styled.div`
  width: 300px;
  height: 480px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px black;
  overflow: hidden;
`;

const UpperContainer = styled.div`
  height: 100px;
`;


const ImageContainer = styled.div`
  background: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 5px;
  transform: translate(95px, 45px);
  img {
    border: 2px solid grey;
  }`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  color: lightgreen;
  font-weight: 600;
  font-size: 1.5rem;
`;

const StyledH4 = styled.h4`
  margin: 0;
  padding: 0;
  color: rgb(36, 51, 36);
  font-weight: 700;
  font-size: 1.2rem;
`;

const StyledP = styled.p`
  padding: 0;
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: rgb(36, 51, 36);
  text-align: center;
`;


const LowerContainer = styled.div`
  margin-top: 60px;
  height: 300px;
  background: white;
  text-align: center; 
`;

const StyledButton = styled.button `
  button {
    margin: 1rem;
    margin-top: 0;
    color: purple;
    font-weight: bold;
    background-color: white;
    border: 2px solid purple;
    padding: 0.6rem;
    border-radius: 6px;
    transition-duration: 0.5s;
    animation: ease-in-out;
  }

  button:hover {
    background-image: linear-gradient(to left, rgb(207, 207, 207), rgb(7, 202, 56));
    transform: scale(1.2);
    border: none;
    color: white;
  }`;
