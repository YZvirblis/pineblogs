import React, { FormEvent } from 'react'
import { useRef, useState, useEffect } from 'react'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../api/axios';
import { loginStyle } from '../styles';
import { useNavigate } from 'react-router-dom';

const USER_REGEX: RegExp = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const REGISTER_URL = '/v1/users/register/'

function Register() {
    const navigate = useNavigate()

    const userRef = useRef<any>()
    const errRef = useRef<any>()

    const [user, setUser] = useState<string>('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState<string>('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState<string>('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState<string>('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd, email])
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email)
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ username: user, email, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setUser('');
            setPwd('');
            setEmail('')
            setMatchPwd('');
            navigate("/login")
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Or Email Is Already In Use');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    
  return (
    <loginStyle.PageContainer className='loginBackground'>
        <loginStyle.RedirectContainer onClick={() => navigate("/login")}>
            <h3>Already have an account?</h3>
            <p className='text-amber-600 cursor-pointer font-bold text-xl'>Sign In</p>
        </loginStyle.RedirectContainer>
        <loginStyle.MainContainer>
            <loginStyle.TitleText>Welcome</loginStyle.TitleText>
            <loginStyle.InputContainer className='relative'>
                <div className='absolute right-5 top-4'>
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                </div>
                <loginStyle.StyledInput
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                placeholder="Username"
                                />
                                
                            <p id="uidnote" className={`${userFocus && user && !validName ? "instructions" : "offscreen"} m-3 text-sm absolute top-0`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
            </loginStyle.InputContainer>
            <loginStyle.InputContainer className='relative'>
                <div className='absolute right-5 top-4'>
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                </div>
                <loginStyle.StyledInput
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                            <p id="uidnote" className={`${emailFocus && !validEmail? "instructions" : "offscreen"} m-3 text-sm`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must be a valid email<br />
                        </p>
            </loginStyle.InputContainer>
            <loginStyle.InputContainer className='relative'>
                <div className='absolute right-5 top-4'>
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </div>
                <loginStyle.StyledInput
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                                />
                            <p id="uidnote" className={`${pwdFocus && !validPwd ? "instructions" : "offscreen"} m-3 text-sm`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
            </loginStyle.InputContainer>
            <loginStyle.InputContainer>
                <div className='absolute right-5 top-4'>
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                </div>
                <loginStyle.StyledInput
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                placeholder="Confirm Password"
                                />
                            <p id="confirmnote" className={`${matchFocus && !validMatch ? "instructions" : "offscreen"} m-3 text-sm`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
            </loginStyle.InputContainer>
         
                    <p ref={errRef} className="text-red-500" aria-live="assertive">{errMsg}</p>
            <loginStyle.ButtonContainer>
                <loginStyle.StyledButton onClick={handleSubmit} disabled={!validName || !validPwd || !validMatch ? true : false}>Sign In</loginStyle.StyledButton>
            </loginStyle.ButtonContainer>
            {/* <loginStyle.HorizontalRule/>
            <loginStyle.LoginWith>Or Sign In With</loginStyle.LoginWith>
            <loginStyle.IconsContainer>
                <SocialMediaIcon color={`${facebookBg}`}><FaFacebookF/></SocialMediaIcon>
                <SocialMediaIcon color={`${instagramBg}`}><FaInstagram/></SocialMediaIcon>
                <SocialMediaIcon color={`${twitterBg}`}><FaTwitter/></SocialMediaIcon>
            </loginStyle.IconsContainer>                     */}
        </loginStyle.MainContainer>
</loginStyle.PageContainer>
  )
}

export default Register