import React from 'react'
import { Outlet } from 'react-router-dom'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate'
import { LinkIcon, Link, LinkP, LinkText, LinkTitle, Links, Content } from './styled'
import UserIcon from '../../../Assets/Icons/UserIcon'
import ShieldLock from '../../../Assets/Icons/ShieldLock'
import { FlexBlock } from '../../../Base/styled'

export default function MyProfile() {
  return (
    <MainTemplate title="My profile">
      <FlexBlock>
        <Links>
          <Link to="personal-information">
            <LinkIcon>
              <UserIcon />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Personal Informations</LinkTitle>
              <LinkP>Est arcu pharetra proin pellentesque</LinkP>
            </LinkText>
          </Link>
          <Link to="login-service">
            <LinkIcon>
              <ShieldLock />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Login Service</LinkTitle>
              <LinkP>Est arcu pharetra proin pellentesque</LinkP>
            </LinkText>
          </Link>
        </Links>
        <Content>
          <Outlet />
        </Content>
      </FlexBlock>
    </MainTemplate>
  )
}
