import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'; 

export const TransactionHistory = ({ items }) => (
  <table className={styles.transaction}>
    <thead>
      <tr>
        <th className={styles.tableHeader}>Type</th>
        <th className={styles.tableHeader}>Amount</th>
        <th className={styles.tableHeader}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.row_table}>
          <td className={styles.tableCell}>{type}</td>
          <td className={styles.tableCell}>{amount}</td>
          <td className={styles.tableCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
