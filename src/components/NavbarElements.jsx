import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 10px;
  overflow-x: hidden;
  padding: 8px 0;
`;
 
export const NavLink = styled(Link)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #2196F3;
  display: block;
  &.active {
    color: #4d4dff;
  }
`;
 
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
 
export const NavMenu = styled.div`
`;