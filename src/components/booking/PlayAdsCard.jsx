import myImage from "../../assets/img/deep-thought.jpg";
import styled from "styled-components";

export const PlayAdsCard = (props) => {


    return (
        <>
            <Card>
                <CardCover>
                    <CardCoverImg src={myImage} alt="picture of deep thought"/>
                </CardCover>
                <CardContentContent>
                    <CardContentTitle>
                        {props.booking.course} - {props.booking.time} - #{props.booking.id}
                    </CardContentTitle>
                    <CardContentBody >
                        {props.booking.golfClub}, {props.booking.location}
                        <p>Spelare:</p>
                        <StyledList>
                            {props.booking.bookedPlayers.map((player) =>
                                <StyledListItem key={player.id} >
                                    {player.username}
                                </StyledListItem>
                            )}
                        </StyledList>
                    </CardContentBody>
                    <CardContentButton>
                        Boka plats
                    </CardContentButton>
                </CardContentContent>
            </Card>

        </>
    )
}


const Card = styled.div`
  height: 12rem;
  width: 25rem;
  display: flex;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  flex-direction: row;
  margin: 2rem;
  :hover {
    opacity: 0.7;
  }
`;

const CardCover = styled.div`
  display: flex;
  width: 50%;
  width: 8rem;
`;

const CardCoverImg = styled.img`
  height: 100%;
  width: 10rem;
  object-fit: cover;
`;

const CardContentTitle = styled.h3`
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: bold;
`;

const CardContentBody = styled.p`
  font-size: 0.7rem;
  line-height: 1.25rem;
`;

const CardContentContent = styled.div`  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
  margin-top: 1rem;
  `;

const CardContentButton = styled.button`
  width: 4rem;
  align-self: end;
  height: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 0.5rem;
  line-height: 1.75rem;
  font-weight: bold;
  background: #c4b5fd;
  border-radius: 0.5rem;
  :hover {
    background: #a78bfa;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledListItem = styled.li`
  text-decoration: none;
  color: inherit;
  display: flex;
  background-color: var(--color-purple-100);
  border-radius: 4px;
  overflow: hidden;
    :hover {
      transform: scale(1.02);
      background-color: var(--color-purple-300);
    }
`


