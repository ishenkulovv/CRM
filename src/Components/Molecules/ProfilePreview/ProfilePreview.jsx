import React from 'react'
import { ProfileCompanyName, ProfileFullName, ProfileImage, ProfileStyled, ProfileTexts } from './styled'

export default function ProfilePreview() {
  return (
    <ProfileStyled>
      <ProfileImage src="./assets/images/avatar.png" />
      <ProfileTexts>
        <ProfileFullName>Tynisha Obey</ProfileFullName>
        <ProfileCompanyName>Makostore</ProfileCompanyName>
      </ProfileTexts>
    </ProfileStyled>
  )
}
