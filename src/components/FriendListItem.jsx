import PropTypes from 'prop-types';
import styles from './friendListItem.module.css'; 

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
