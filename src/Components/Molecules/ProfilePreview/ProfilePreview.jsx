import React from 'react'
import { ProfileCompanyName, ProfileFullName, ProfileImage, ProfileStyled, ProfileTexts } from './styled'
import { useSelector } from 'react-redux'

export default function ProfilePreview() {
  const user = useSelector(state => state.rootReducer?.usersSlice?.current_user)

  return (
    <ProfileStyled>
      <ProfileImage src={user?.avatar ?? "/assets/images/avatar.png"} />
      <ProfileTexts>
        <ProfileFullName>{user?.first_name} {user?.last_name}</ProfileFullName>
        <ProfileCompanyName>Makostore</ProfileCompanyName>
      </ProfileTexts>
    </ProfileStyled>
  )
}
