import CreateNoteBookButton from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebookCard";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";

export default async function Page() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>NoteBooks</h1>
      <CreateNoteBookButton />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notebooks.success &&
          notebooks?.notebooks?.map((notebook) => (
            <NotebookCard key={notebook.id} notebook={notebook} />
          ))}
      </div>
      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No Notebook found!</div>
      )}

      {/* <Notebooks notebooks={notebooks}/> */}
    </PageWrapper>
  );
}
