import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";

const useCloudinary = () => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'pineblogs'
        }
      });
  return cld
}

export default useCloudinary