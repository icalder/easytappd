import { DigitalBoard } from "@/untappd/digitalboard";
//import { dataBoardId } from "./dataBoardId";
import data from "../../digital_board.json";

export async function loader() {
  //const { boardId } = dataBoardId();
  // const response = await fetch(
  //   `https://business.untappd.com/api/v1/digital_boards/${boardId}?public=true`
  //   // "https://business.untappd.com/api/v1/digital_boards/20462?public=true"
  // );
  //const data = await response.json();
  return data.digital_board as unknown as DigitalBoard;
}
