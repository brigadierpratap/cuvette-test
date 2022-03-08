import React from "react";
import { Outlet } from "react-router-dom";
import {
  Brand,
  InnerCont,
  NavBar,
  OuterCont,
  ProfileCont,
  SideBarCont,
  SideBarLink,
} from "./Layout.styles";
import logo from "../../Assets/Images/logo.svg";
import { ReactComponent as DashboardIcon } from "../../Assets/Images/dashboard.svg";
import { ReactComponent as AwardIcon } from "../../Assets/Images/award.svg";
import { ReactComponent as InternIcon } from "../../Assets/Images/intern.svg";

const Layout = () => {
  return (
    <OuterCont>
      <NavBar>
        <Brand to={"/home"}>
          <img src={logo} alt="logo" />
        </Brand>
        <ProfileCont>
          <img
            src={
              "https://lh3.googleusercontent.com/a-/AOh14GgzTjlKltVgA-fjkDhyy7igRWepGDW2t3qTwLG-PQ=s576-p-rw-no"
            }
            alt="logo"
          />
          <span>Pawan Singh</span>
        </ProfileCont>
      </NavBar>
      <InnerCont>
        <SideBarCont>
          <SideBarLink to={"dashboard"}>
            <DashboardIcon /> Dashboard
          </SideBarLink>
          <SideBarLink to={"skill-test"}>
            <AwardIcon />
            Skill Test
          </SideBarLink>
          <SideBarLink to={"internships"}>
            <InternIcon />
            Internships
          </SideBarLink>
        </SideBarCont>
        <Outlet />
      </InnerCont>
    </OuterCont>
  );
};

export default Layout;
