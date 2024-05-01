import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
const Link = styled(HashLink)`
  border: 2px solid transparent;
  padding: 4px;
  transition: border-color 0.3s ease, transform 0.3s ease; /* Adding transition for border-color and transform */
  transform-origin: center; /* Setting the transform origin to the center */

  &:hover {
    transform: scale(1.1); /* Applying a scale transform on hover */
  }
`;

export const LinkWithHover = ({ children }) => {
  return <Link>{children}</Link>;
};
