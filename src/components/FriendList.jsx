import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import styles from './friendList.module.css'; 


export const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};