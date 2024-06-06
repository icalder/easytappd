import { ActionFunctionArgs, redirect } from "react-router-dom";
import { dataBoardId } from "./dataBoardId";

export async function saveSettings({ request }: ActionFunctionArgs) {
  const { setBoardId } = dataBoardId();
  const data = await request.formData();
  setBoardId(data.get("boardId") as string);
  return redirect("/");
}
