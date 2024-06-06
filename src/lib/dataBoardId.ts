let boardId = "67501";

export function dataBoardId() {
  const setBoardId = (id: string) => (boardId = id);
  return { boardId, setBoardId };
}
