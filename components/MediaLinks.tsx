import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { RiWhatsappFill } from 'react-icons/ri'

const MediaLinks = () => {
  return (
    <div>
      <div className="flex gap-3 md:gap-4">
              <FaFacebook className=" size-8 md:size-10 hover:text-primary-2" />
              <FaSquareInstagram className=" size-8 md:size-10 hover:text-primary-2" />
              <AiFillTwitterCircle className=" size-8 md:size-10 hover:text-primary-2" />
              <RiWhatsappFill className=" size-8 md:size-10 hover:text-primary-2" />
            </div>
    </div>
  )
}

export default MediaLinks