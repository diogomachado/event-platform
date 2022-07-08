import { ArrowUDownRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex flex-1 justify-center flex-col h-screen items-center">
            <ArrowUDownRight size={48} weight="light" className="mb-4" />
            <p className="text-blue-100">Escolha uma aula ao lado</p>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
