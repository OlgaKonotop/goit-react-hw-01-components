import { PropTypes } from 'prop-types';
import {
  CardProfile,
  Photo,
  StatsList,
  Username,
  Tag,
  Location,
  StatsItem,
  Quantity,
  Followers,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <CardProfile>
      <div>
        <Photo src={avatar} alt="User avatar" width="240" />
        <div>
          <Username>{username}</Username>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </div>
      </div>

      <StatsList>
        <StatsItem>
          <Followers>Followers</Followers>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Followers>Views</Followers>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Followers>Likes</Followers>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </CardProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: (PropTypes.shape = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    stats: PropTypes.number.isRequired,
  }),
};
