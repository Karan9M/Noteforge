import { CreateNoteButton } from "@/components/create-note-button";
import NoteCard from "@/components/noteCard";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebooks";

type Params = Promise<{
  notebookId: string;
}>;

export default async function Page({ params }: { params: Params }) {
  const { notebookId } = await params;
  const { notebook } = await getNotebookById(notebookId);
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: notebook?.name ?? "Note",
          href: `/dashboard/note/${notebookId}`,
        },
      ]}
    >
      <h1>{notebook?.name}</h1>
      <CreateNoteButton notebookId={notebookId} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notebook?.notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </PageWrapper>
  );
}
