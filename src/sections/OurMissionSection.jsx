import AddImage2 from "../../assets/img/add/add2.png";
import FullButton from "../components/buttons/FullButton";
import React from "react";
import styled from "styled-components";

export const OurMissionSection = () => {
    return (
        <> <div className="lightBg">
            <div className="container">
                <Advertising className="flexSpaceCenter">
                    <AddLeft>
                        <AddLeftInner>
                            <ImgWrapper className="flexCenter">
                                <img className="radius8" src={AddImage2} alt="add" />
                            </ImgWrapper>
                        </AddLeftInner>
                    </AddLeft>
                    <AddRight>
                        <h2 className="font40 extraBold">Vårt mål</h2>
                        <p className="font12">
                            Målet var att skapa en plattform för golfaren, en som söker efter en perfekt golfpartner. Vi tror på att en golfupplevelse blir roligare och mer givande genom att kunna hitta en perfekt golfpartner. Med hjälp av vår matchningsteknik kan du snabbt hitta en golfare som passar din spelstil och preferenser.

                            Vi tror även på hållbarhet, därför skapade vi plattformen med hållbarhet i fokus. Vi jobbar aktivt med att minska miljöpåverkan och uppmuntrar våra användare att göra samma sak.
                        </p>
                        <ButtonsRow
                            className="flexNullCenter"
                            style={{ margin: "30px 0" }}
                        >
                            <div style={{ width: "190px" }}>
                                <FullButton
                                    title="Skapa konto"
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div style={{ width: "190px", marginLeft: "15px" }}>
                                <FullButton
                                    title="Kontakta oss"
                                    action={() => alert("clicked")}
                                    border
                                />
                            </div>
                        </ButtonsRow>
                    </AddRight>
                </Advertising>
            </div>
        </div>
        </>
    )
}



const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
    margin-top: 30%
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
