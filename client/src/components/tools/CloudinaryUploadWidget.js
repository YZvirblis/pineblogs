import React, { ReactNode, useEffect, useRef } from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { profileStyle } from '../../styles'


const CloudinaryUploadWidget = ({userID, isProfile, postID ,multiple, children}) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const axiosPrivate = useAxiosPrivate()
  const {auth, setAuth} = useAuth()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "pineblogs",
      uploadPreset: "mbnxqvfn",
      cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      multiple,  //restrict upload to a single file
      folder: `pineblogs/${userID}/${isProfile ? "profile/" : postID}/`, //upload files to the specified folder
      tags: [isProfile ? "profile" : "post", postID, userID], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      clientAllowedFormats: isProfile && ["jpg, jpeg, png"], //restrict uploading to image files only
      maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    }, async (err, result) => {
      if(result.data && result.data.info && result.data.info.files && result.data.info.files.length > 0){
        const format = result.data.info.files[0].uploadInfo.format
        // console.log(`INSTANCE: ${(JSON.stringify(result.data.info.files))}`)
        if(isProfile){
          const {profilePicture, ...rest} = auth.user
          const newUser = {profilePicture: result.data.info.files[0].uploadInfo.public_id, ...rest}
          setAuth({token: auth.token, user: newUser})
          const res = await axiosPrivate.put(`/v1/users/update/${auth.user._id}`, newUser)
          window.location.reload(false);
        }

      }
    })
  }, [])
  
  return (
    <profileStyle.ProfilePictureContainer className='cursor-pointer' onClick={async () => { await widgetRef.current.open()}}>{children}</profileStyle.ProfilePictureContainer>
  )
}

export default CloudinaryUploadWidget



