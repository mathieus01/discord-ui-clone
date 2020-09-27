import React, { useState, useEffect } from 'react';
import { UserModel, loadUsers } from '../../services/api'
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  avatar: string;
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, avatar, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} >
        {avatar !== '' && <img src={avatar} alt="avatar" />}
      </Avatar>

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  const [usersOnline, setUsersOnline] = useState<UserModel[]>([])
  const [usersOffiline, setUsersOffiline] = useState<UserModel[]>([])

  useEffect(() => {
    const usersOnline = loadUsers().filter(user => {
      return user.isOnline
    })
    setUsersOnline(usersOnline)

    const usersOffiline = loadUsers().filter(user => {
      return !user.isOnline
    })
    setUsersOffiline(usersOffiline)
  }, [])


  return (
    <Container>
      <Role>Disponivel - {usersOnline.length}</Role>
      {usersOnline.map(user => (
        <UserRow
          key={user.name}
          nickname={user.name}
          avatar={user.avatar}
          isBot={user.isBot}
        />
      ))}


      <Role>Offiline - {usersOffiline.length}</Role>
      {usersOffiline.map(user => (
        <UserRow
          key={user.name}
          nickname={user.name}
          avatar={user.avatar}
          isBot={user.isBot}
        />
      ))}
    </Container>
  );
}

export default UserList;