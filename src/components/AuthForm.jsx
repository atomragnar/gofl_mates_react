import {
    Form,
    Link,
    useSearchParams,
    useActionData,
    useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';
import WrapperCard from "./ui/WrapperCard";
import {ProfileContainer} from "./containers/ProfileContainer";
import styled from "styled-components";
import FullButton from "./buttons/FullButton";

function AuthForm() {
    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';

    return (
        <>
            <ProfileContainer>
                <StyledForm method="post" className={classes.form}>
                    <h1 className="font30 extraBold"
                        style={{ margin: "15px 0", marginBottom: "30px" }}
                    >

                        {isLogin ? 'Logga in' : 'Skapa en ny användare'}</h1>
                    {data && data.errors && (
                        <ul>
                            {Object.values(data.errors).map((err) => (
                                <li key={err}>{err}</li>
                            ))}
                        </ul>
                    )}
                    {data && data.message && <p>{data.message}</p>}
                    <p>
                        <label className="font15" htmlFor="username">Användarnamn</label>
                        <input id="username" type="username" name="username" required/>
                    </p>
                    {!isLogin && (
                        <p>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" required/>
                        </p>
                    )}
                    <p>
                        <label htmlFor="image">Lösenord</label>
                        <input id="password" type="password" name="password" required/>
                    </p>
                    <div className={classes.actions}>
                        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} className="font13">
                            {isLogin ? 'Om du inte har ett konto tryck här för att skapa nytt konto' : 'Om du redan har ett konto logga in här'}
                        </Link>
                        <button disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : isLogin ? 'Logga in' : 'Skapa konto'}
                        </button>
                    </div>
                </StyledForm>
            </ProfileContainer>
        </>
    );
}

export default AuthForm;


const StyledButton = styled.button`
  border: 0px;
  outline: none;
  background-color: #939cee;
  color: #7620ff;
  :hover {
    opacity: 0.5;
  }
`



const StyledForm = styled(Form)`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
