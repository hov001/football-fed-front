import "../bigNewsBlock/newsBlock.css";
import Navigation from "@nav/nav.js";
import smallNewsBlockData from "@data/smallNewsBlockData";

const block = `
  <!-- BLOKS -->
        ${new Navigation().rendersmallNewsBlockItem(smallNewsBlockData)}
  <!-- BLOKS END -->
`;

export default block;