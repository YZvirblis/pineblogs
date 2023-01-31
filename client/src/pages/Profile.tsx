import React, { useEffect, useState } from 'react'
import {  FaPencilAlt, FaLocationArrow } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CloudinaryUploadWidget from '../components/tools/CloudinaryUploadWidget';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useCloudinary from '../hooks/useCloudinary';
import { profileStyle } from '../styles';
import {AdvancedImage} from '@cloudinary/react';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { byAngle } from '@cloudinary/url-gen/actions/rotate';

const Profile = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const profileID = searchParams.get("id")
    const axiosPrivate = useAxiosPrivate()
    const [userProfile, setUserProfile] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const [isEditable, setIsEditable] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const {auth, setAuth} = useAuth()
    const cld = useCloudinary()

    const [username, setUsername] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [location, setLocation] = useState<string>()
    const [about, setAbout] = useState<string>()

    useEffect(() => {
        console.log("effect")
        !profileID && navigate("/")
        const getUserProfile = async () => {
            try{
                const res = await axiosPrivate.get(`/v1/users/getuser/${profileID}`)
                setUserProfile(res.data)
                if(auth.user._id === res.data._id){
                    setIsEditable(true)
                }
            } catch (err: any){
                console.error(err.message)
                setError("Something went wrong :(")
            }
        }
        if(!isEdit){
            getUserProfile()
        } else {
            setUsername(auth.user.username)
            setFirstName(auth.user.firstName)
            setLastName(auth.user.lastName)
            setLocation(auth.user.location)
            setAbout(auth.user.description)
        }
    }, [isEdit, auth])

    const updateUser = async () => {
        const {username: oldUsername, firstName: oldFirstname, lastName: oldLastName, location: oldLocation, description: oldDescription, ...other } = auth.user
        const newUser = {username,firstName,lastName,location,description:about, ...other}
        const res = await axiosPrivate.put(`/v1/users/update/${auth.user._id}`, newUser)
        if(res.status === 200){
            setAuth({user:newUser, token: auth.token})
        }
        else{
            setError("Something wen wrong.")
        }
    }
    
  return (
    <profileStyle.MainContainer>
        {!userProfile 
            ?
                <profileStyle.ErrorMessage>{error}</profileStyle.ErrorMessage>
            :
                !isEdit
                    ?
                        <profileStyle.ProfileContainer>
                            <profileStyle.ProfilePictureContainer>
                                {userProfile.profilePicture
                                    ?
                                        <AdvancedImage cldImg={cld.image(`${userProfile.profilePicture}`).resize(fill().width(1000).height(1000)).roundCorners(byRadius(50))}/>
                                    :
                                        <profileStyle.ProfilePicture/>
                                }
                            </profileStyle.ProfilePictureContainer>
                            <profileStyle.InfoContainer
                            className='relative'>
                                {/* @ts-ignore */}
                                {isEditable ? <profileStyle.Icon className='absolute top-2 right-2' withBg pointer onClick={() => setIsEdit(!isEdit)}> <FaPencilAlt/> </profileStyle.Icon>: null}
                                <profileStyle.Username>{userProfile.username}</profileStyle.Username>
                                <profileStyle.DetailsContainer>
                                    <profileStyle.FullNameContainer>
                                        <span>{userProfile.firstName}</span>
                                        <span>{userProfile.lastName}</span>
                                    </profileStyle.FullNameContainer>
                                    <profileStyle.LocationContainer>
                                        <profileStyle.Icon className='default'><FaLocationArrow/></profileStyle.Icon>
                                        <span>{userProfile.location}</span>
                                    </profileStyle.LocationContainer>
                                </profileStyle.DetailsContainer>
                                <profileStyle.AboutContainer>
                                    <profileStyle.About>{userProfile.description}</profileStyle.About>
                                </profileStyle.AboutContainer>
                            </profileStyle.InfoContainer>
                        </profileStyle.ProfileContainer>
                    :
                        <profileStyle.ProfileContainer>
                            <CloudinaryUploadWidget userID={auth.user._id} isProfile postID={null} multiple={false}>
                                {userProfile.profilePicture ? 
                                    <AdvancedImage cldImg={cld.image(`${userProfile.profilePicture}`).resize(fill().width(1000).height(1000)).roundCorners(byRadius(50))}/>
                                :    
                                    <profileStyle.ProfilePicture/> 
                                }
                            </CloudinaryUploadWidget>
                            <profileStyle.InfoContainer
                            className='relative'>
                                <p>{error}</p>
                                {/* @ts-ignore */}
                                <profileStyle.Icon className='absolute top-2 right-2' withBg onClick={async () => {isEdit && await updateUser(); setIsEdit(!isEdit)}} pointer> <FaPencilAlt/> </profileStyle.Icon>
                                <profileStyle.UsernameInput type="text" placeholder="Username" value={username} onChange={(e) => 
                                    {
                                        if(e.target.value.length > 24){
                                            setError("Reached maximum characters!")
                                        }else{
                                            setUsername(e.target.value)
                                            setError("")
                                        }
                                            }}/>
                                <profileStyle.DetailsContainer>
                                    <profileStyle.FullNameContainer>
                                    <profileStyle.NameInput type="text" placeholder="First Name" value={firstName} onChange={(e) => {
                                        if(e.target.value.length > 12){
                                            setError("Reached maximum characters!")
                                        } else{
                                            setFirstName(e.target.value)
                                            setError("")
                                        }
                                        }}/>
                                    <profileStyle.NameInput type="text" placeholder="Last Name" value={lastName} onChange={(e) => {
                                        if(e.target.value.length > 12){
                                            setError("Reached maximum characters!")
                                        } else{
                                            setLastName(e.target.value)
                                            setError("")
                                        }
                                        }}/>
                                    </profileStyle.FullNameContainer>
                                    <profileStyle.LocationContainer>
                                    <profileStyle.NameInput type="text" placeholder="Location" value={location} onChange={(e) => 
                                        {
                                            if(e.target.value.length > 16){
                                            setError("Reached maximum characters!")
                                            } else{
                                                setLocation(e.target.value)
                                            setError("")
                                            }
                                    }}/>
                                    </profileStyle.LocationContainer>
                                </profileStyle.DetailsContainer>
                                <profileStyle.AboutContainer>
                                    <profileStyle.AboutInput placeholder='About.' value={about} onChange={(e) => 
                                        {
                                            if(e.target.value.length > 250){
                                            setError("Reached maximum characters!")
                                            } else {
                                                setAbout(e.target.value)
                                            setError("")
                                            }
                                    }}/>
                                    {/* <profileStyle.About>{userProfile.description}</profileStyle.About> */}
                                </profileStyle.AboutContainer>
                            </profileStyle.InfoContainer>
                        </profileStyle.ProfileContainer>
    }
    </profileStyle.MainContainer>
  )
}

export default Profile