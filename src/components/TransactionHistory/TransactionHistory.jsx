import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transaction}>
    <thead>
      <tr>
        <th className={css.tableHeader}>Type</th>
        <th className={css.tableHeader}>Amount</th>
        <th className={css.tableHeader}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={css.row_table}>
          <td className={css.tableCell}>{type}</td>
          <td className={css.tableCell}>{amount}</td>
          <td className={css.tableCell}>{currency}</td>
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
    })
  ).isRequired,
};
