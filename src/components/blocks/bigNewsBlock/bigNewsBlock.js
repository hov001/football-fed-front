import "./newsBlock.css";
import Navigation from "@nav/nav.js";
import bigNewsBlockData from "@data/bigNewsBlockData";

const block = `
  <!-- BLOKS -->
      ${new Navigation().renderbigNewsBlockItems(bigNewsBlockData)}
  <!-- BLOKS END -->
`;

export default block;