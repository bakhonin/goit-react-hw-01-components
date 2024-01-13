import PropTypes from 'prop-types';
import css from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const stylesStatus = isOnline ? css.online : css.offline;

  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={stylesStatus}> {isOnline ? 'online' : 'offline'}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
