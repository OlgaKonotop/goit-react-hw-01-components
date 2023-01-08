import { PropTypes } from 'prop-types';
import { Table, Thead, Tbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <Table className="transaction-history">
        <thead>
          <tr>
            <Thead>Type</Thead>
            <Thead>Amount</Thead>
            <Thead>Currency</Thead>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <Tbody>{type}</Tbody>
                <Tbody>{amount}</Tbody>
                <Tbody>{currency}</Tbody>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
