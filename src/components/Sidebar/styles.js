import styled from 'styled-components';
import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 230px;
  background: #000000;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? "bold" : "normal")};

      &:hover {
        color: #fff;
      }
    }
    span {
      font-size: 12px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: bold;
    }

    ${Spinner} {
      height: 15px;
      margin-left: 5px;
    }
  }

  h5 {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 1.11px;
  }

  h4 {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 1.11px;
    border-bottom: 1px solid #282828;
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 5px;
  }
`;