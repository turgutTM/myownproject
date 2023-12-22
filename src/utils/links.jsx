import { TfiNotepad } from "react-icons/tfi";
import { SlNotebook } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

const links = [
  {
    path: "note",
    icon: <TfiNotepad></TfiNotepad>,
  },
  {
    path: "all-notes",
    icon: <SlNotebook></SlNotebook>,
  },
  {
    path: "profile",
    icon: <CgProfile></CgProfile>,
  },
];

export default links;
