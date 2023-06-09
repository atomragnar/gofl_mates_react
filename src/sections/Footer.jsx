import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoImg from "../assets/svg/Logo";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="whiteBg">
        <div className="container1">
          <InnerWrapper
            className="flexSpaceCenter1"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter1 animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg />
              <h1
                className="font15 extraBold"
                style={{ marginLeft: "15px" }}
              >
                Golf Mates
              </h1>
            </Link>
            <StyleP className="font13">
              © {getCurrentYear()} -{" "}
              <span className="font13">Golf Mates</span> All Right
              Reserved
            </StyleP>

            <Link
              className="greenColor animate pointer font30"
              to="home"
              smooth={true}
              offset={-80}
            >
              Hem
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
