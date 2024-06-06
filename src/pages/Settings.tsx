import { dataBoardId } from "@/lib/dataBoardId";
import { Link, Form } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const { boardId } = dataBoardId();

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Settings
      </h1>
      <h2>
        <Link to={"/"}>Back</Link>
      </h2>
      <Form method="post">
        <label>
          Board ID
          <input type="text" defaultValue={boardId} name="boardId"></input>
        </label>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}
