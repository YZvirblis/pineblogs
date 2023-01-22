import React, { useEffect, useState } from 'react'
import { FaLocationArrow, FaPencilAlt } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { profileStyle, loginStyle } from '../styles';

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const profileID = searchParams.get("id")
    const axiosPrivate = useAxiosPrivate()
    const [userProfile, setUserProfile] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const [isEditable, setIsEditable] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const {auth} = useAuth()

    useEffect(() => {
        const getUserProfile = async () => {
            try{
                const res = await axiosPrivate.get(`/v1/users/getuser/${profileID}`)
                setUserProfile(res.data)
                if(auth.user._id === res.data._id){
                    setIsEditable(true)
                }
                console.log(res.data)
            } catch (err: any){
                console.error(err.message)
                setError("Something went wrong :(")
            }
        }
        getUserProfile()
    }, [])
    
  return (
    <profileStyle.MainContainer>
        {!userProfile 
            ?
                <profileStyle.ErrorMessage>{error}</profileStyle.ErrorMessage>
            :
                !isEdit
                    ?
                        <profileStyle.ProfileContainer>
                            <profileStyle.ProfilePicture/>
                            <profileStyle.InfoContainer
                            className='relative'>
                                {/* @ts-ignore */}
                                {isEditable ? <profileStyle.Icon className='absolute top-2 right-2' withBg onClick={() => setIsEdit(!isEdit)}> <FaPencilAlt/> </profileStyle.Icon>: null}
                                <profileStyle.Username>{userProfile.username}</profileStyle.Username>
                                <profileStyle.DetailsContainer>
                                    <profileStyle.FullNameContainer>
                                        <span>Yuriy</span>
                                        <span>Zvirblis</span>
                                        {/* <span>{userProfile.firstName}</span>
                                        <span>{userProfile.lastName}</span> */}
                                    </profileStyle.FullNameContainer>
                                    <profileStyle.LocationContainer>
                                        <profileStyle.Icon><FaLocationArrow/></profileStyle.Icon>
                                        <span>Honoulu</span>
                                        {/* <span>{userProfile.location}</span> */}
                                    </profileStyle.LocationContainer>
                                </profileStyle.DetailsContainer>
                                <loginStyle.HorizontalRule></loginStyle.HorizontalRule>
                                <profileStyle.AboutContainer>
                                    <profileStyle.About>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, pariatur! Suscipit voluptates perspiciatisLorem</profileStyle.About>
                                    {/* <profileStyle.About>{userProfile.description}</profileStyle.About> */}
                                </profileStyle.AboutContainer>
                            </profileStyle.InfoContainer>
                        </profileStyle.ProfileContainer>
                    :
                        <profileStyle.ProfileContainer>
                            <profileStyle.ProfilePicture/>
                            <profileStyle.InfoContainer
                            className='relative'>
                                {/* @ts-ignore */}
                                {isEditable ? <profileStyle.Icon className='absolute top-2 right-2' withBg onClick={() => setIsEdit(!isEdit)}> <FaPencilAlt/> </profileStyle.Icon>: null}
                                <profileStyle.Username>{userProfile.username}</profileStyle.Username>
                                <profileStyle.DetailsContainer>
                                    <profileStyle.FullNameContainer>
                                        <span>Yuriy</span>
                                        <span>Zvirblis</span>
                                        {/* <span>{userProfile.firstName}</span>
                                        <span>{userProfile.lastName}</span> */}
                                    </profileStyle.FullNameContainer>
                                    <profileStyle.LocationContainer>
                                        <profileStyle.Icon><FaLocationArrow/></profileStyle.Icon>
                                        <span>Honoulu</span>
                                        {/* <span>{userProfile.location}</span> */}
                                    </profileStyle.LocationContainer>
                                </profileStyle.DetailsContainer>
                                <loginStyle.HorizontalRule></loginStyle.HorizontalRule>
                                <profileStyle.AboutContainer>
                                    <profileStyle.About>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, pariatur! Suscipit voluptates perspiciatisLorem</profileStyle.About>
                                    {/* <profileStyle.About>{userProfile.description}</profileStyle.About> */}
                                </profileStyle.AboutContainer>
                            </profileStyle.InfoContainer>
                        </profileStyle.ProfileContainer>
    }
    </profileStyle.MainContainer>
  )
}

export default Profile