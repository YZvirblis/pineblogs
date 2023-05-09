import { useRef, useState, useEffect, FormEvent } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginStyle } from '../styles';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import axios from '../api/axios';
import SocialMediaIcon from '../components/reusables/SocialMediaIcon';
const LOGIN_URL = '/v1/users/login/';

const Login = () => {
    //@ts-ignore
    const { setAuth, persist, setPersist, auth } = useAuth();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const userRef = useRef<any>();
    const errRef = useRef<any>();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        if (auth.user) {
            navigate("/")
        }
        setErrMsg('');
    }, [email, pwd])



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const token = response?.data?.token;
            const user = response?.data?.user
            setAuth({ user, token });
            setEmail('');
            setPwd('');
            navigate(from, { replace: true })
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist((prev: any) => !prev)
    }

    useEffect(() => {
        localStorage.setItem("persist", persist)
    }, [persist])

    const facebookBg = "linear-gradient(to right, #0546A0 0%, #663FB6 100%);"
    const instagramBg = "linear-gradient(to right, #A12Ac4 0%, #ED586C 40%, #F0A853);"
    const twitterBg = "linear-gradient(to right, #56C1E1 0%, #35A9CE 100%);"

    return (
        <loginStyle.PageContainer className='loginBackground'>
            {/* <loginStyle.RedirectContainer onClick={() => navigate("/register")}>
                <h3>Don't have an account?</h3>
                <p className='text-amber-600 cursor-pointer font-bold text-xl'>Register</p>
            </loginStyle.RedirectContainer> */}
            <loginStyle.MainContainer>
                <loginStyle.TitleText>Welcome</loginStyle.TitleText>
                <loginStyle.InputContainer>
                    <loginStyle.StyledInput
                        type="email"
                        id="email"
                        ref={ userRef }
                        autoComplete="off"
                        onChange={ (e: FormEvent) => { const target = e.target as HTMLTextAreaElement; setEmail(target.value) } }
                        value={ email }
                        required
                        placeholder="email"
                    />
                </loginStyle.InputContainer>
                <loginStyle.InputContainer>
                    <loginStyle.StyledInput
                        type="password"
                        id="password"
                        onChange={ (e: FormEvent) => { const target = e.target as HTMLTextAreaElement; setPwd(target.value) } }
                        value={ pwd }
                        required
                        placeholder="password"
                    />
                </loginStyle.InputContainer>
                {/*@ts-ignore*/ }
                <loginStyle.InputContainer direction="row" type="checkbox">
                    <loginStyle.StyledInput
                        type="checkbox"
                        id='persist'
                        onChange={ togglePersist }
                        checked={ persist }
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </loginStyle.InputContainer>
                <p ref={ errRef } className="text-red-500" aria-live="assertive">{ errMsg }</p>
                <loginStyle.ButtonContainer>
                    <loginStyle.StyledButton onClick={ handleSubmit }>Sign In</loginStyle.StyledButton>
                </loginStyle.ButtonContainer>
                {/* <loginStyle.HorizontalRule/>
            <loginStyle.LoginWith>Or Sign In With</loginStyle.LoginWith>
            <loginStyle.IconsContainer>
                <SocialMediaIcon color={`${facebookBg}`}><FaFacebookF/></SocialMediaIcon>
                <SocialMediaIcon color={`${instagramBg}`}><FaInstagram/></SocialMediaIcon>
                <SocialMediaIcon color={`${twitterBg}`}><FaTwitter/></SocialMediaIcon>
            </loginStyle.IconsContainer>                     */}
            </loginStyle.MainContainer>
            {/* <loginStyle.ForgotPassword>Forgot Password?</loginStyle.ForgotPassword> */ }
        </loginStyle.PageContainer>

    )
}

export default Login