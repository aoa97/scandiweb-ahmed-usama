import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &.row {
    flex-direction: row-reverse;
    align-self: flex-end;
    column-gap: 2rem;

    .op {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.4rem;
    }
  }

  .op {
    cursor: pointer;
    ${flexCenter}
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2.6rem;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    border: 1px solid ${({ theme }) => theme.colors.black};
    transition: 0.5s all ease;

    ${({ mini }) => mini &&`
      width: 2.4rem;
      height: 2.4rem;
      font-size: 1.8rem;
      font-weight: 400;
    `}

    &:hover {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};

      path {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .val {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
