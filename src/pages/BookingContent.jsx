import styled from "styled-components";

export const BookingContent = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  margin-left: 15%;
  padding: 20px 30px;
  margin-top: 100px;
`;
