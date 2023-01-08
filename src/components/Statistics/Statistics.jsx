import { PropTypes } from 'prop-types';
import {
  Label,
  StatisticsWrap,
  Title,
  StatisticsItem,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <StatisticsWrap>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsWrap>
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
