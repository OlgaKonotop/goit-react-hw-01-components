import { PropTypes } from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List, FriendItem } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, id, name, isOnline }) => (
        <FriendItem key={id}>
          <FriendListItem
            avatar={avatar}
            id={id}
            name={name}
            isOnline={isOnline}
          />
        </FriendItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: (PropTypes.shape = {
    id: PropTypes.number.isRequired,
  }),
};
