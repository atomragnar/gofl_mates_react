import styled from "styled-components";


function PageContent({title, children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default PageContent;

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  margin-left: 20%;
  padding: 20px 30px;
  margin-top: 70px;
`;
