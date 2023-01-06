import { PropTypes } from 'prop-types';
// import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ label, percentage, id }) => (
          <li key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: (PropTypes.shape = {
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
