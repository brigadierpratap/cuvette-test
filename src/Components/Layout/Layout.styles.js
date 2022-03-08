import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const OuterCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 5em;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2em;
  border-bottom: 1px solid #ebf0f5;
`;

export const SideBarCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 226px;
  min-height: calc(100vh - 5em);
  border-right: 1px solid #ebf0f5;
  gap: 1em;
  padding-block: 1em;
`;

export const SideBarLink = styled(NavLink)`
  color: #566474;
  width: 80%;
  padding-left: 2em;
  text-decoration: none;
  display: flex;
  gap: 1em;
  align-items: center;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  padding-block: 0.8em;

  &:hover {
    background-color: #f7f8fa;
    color: #445ee2;
    path {
      stroke: #445ee2;
    }
  }

  &.active {
    background-color: #f7f8fa;
    color: #445ee2;
    font-weight: 700;
    path {
      stroke: #445ee2;
    }
  }
`;

export const InnerCont = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
`;
export const Brand = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
`;

export const ProfileCont = styled.div`
  width: 10em;
  border: 1px solid #ebf0f5;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  gap: 1em;
  align-items: center;
  cursor: pointer;

  img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    color: #1e272e;
  }
  &:hover {
    background-color: #ebf0f5;
  }
`;
