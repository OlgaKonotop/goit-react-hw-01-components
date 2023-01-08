import styled from 'styled-components';

export const StaticsWrap = styled.div`
  width: 440px;
  border-radius: 2px;
  border: 1px solid rgba(24, 86, 48, 0.12);
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  font-size: 12px;
  text-transform: uppercase;
`;

export const StatisticsWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  width: 83px;
  border: 2px solid green;
  border-radius: 2px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  margin-bottom: 5px;
`;
export const Label = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
`;
export const Percentage = styled.span`
  font-size: 12px;
`;
