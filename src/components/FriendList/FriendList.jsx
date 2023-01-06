import { PropTypes } from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, id, name, isOnline }) => (
        <li key={id}>
          <FriendListItem
            avatar={avatar}
            id={id}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: (PropTypes.shape = {
    id: PropTypes.number.isRequired,
  }),
};
