import PropTypes from 'prop-types';
import styles from './profile.module.css'; 

export const Profile = ({ name, tag, location, image, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={image} alt={name} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.items}>
        <span className={styles.label}>Followers</span>
        <span className={styles.value}>{stats.followers}</span>
      </li>
      <li className={styles.items}>
        <span className={styles.label}>Views</span>
        <span className={styles.value}>{stats.views}</span>
      </li>
      <li className={styles.items}>
        <span className={styles.label}>Likes</span>
        <span className={styles.value}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
