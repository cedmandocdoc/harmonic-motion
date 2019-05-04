import styled from "styled-components";
import { prop, propWithPX } from "../libs/fp";

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: ${prop("rows")};
  grid-template-columns: ${prop("columns")};
  grid-gap: ${propWithPX("gap")};
`;

export default Grid;
