import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettinsgIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar >
          <img src="https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-15/e35/75388583_146956426561379_7918283599763404264_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=H4L5xlLdW78AX8YA1tX&_nc_tp=18&oh=0dedc2d0a58e2efa33633c88e8c62740&oe=5F9955AE" alt="avatar" />
        </Avatar>
        <UserData >
          <strong>Matheus Nunes</strong>
          <span>#42</span>
        </UserData>
      </Profile>

      <Icons >
        <MicIcon />
        <HeadphoneIcon />
        <SettinsgIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;