import { PropTypes } from 'prop-types';
import { Online, Offline, FriendName } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? <Online>o</Online> : <Offline>o</Offline>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
