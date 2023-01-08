import styled from 'styled-components';

export const CardProfile = styled.div`
  width: 420px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  border: 1px solid rgba(14, 129, 58, 0.12);
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 180px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const Username = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 900;
  color: green;
`;
export const Tag = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  text-align: center;
  font-weight: 700;
`;

export const Location = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatsItem = styled.li`
  border: 2px solid green;
  border-radius: 2px;
  width: 140px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const Followers = styled.span`
  font-size: 10px;

  display: block;
  text-align: center;
`;
export const Quantity = styled.span`
  font-size: 12px;

  font-weight: 700;
  display: block;
  text-align: center;
`;
