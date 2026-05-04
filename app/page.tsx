import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Gian Souza
      </h1>
      <p className="mb-4">
        {`Construindo a ponte entre engenharia e produto. Escrevo sobre IA aplicada, gestão de produtos, arquitetura de software, métricas e produtividade para criar produtos digitais simples, escaláveis e centrados no usuário.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
