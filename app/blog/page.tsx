import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Postagens',
  description: 'Confira as últimas postagens do nosso blog sobre desenvolvimento web, tecnologia e muito mais. Fique atualizado com as novidades e dicas para aprimorar suas habilidades de programação.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Postagens</h1>
      <BlogPosts />
    </section>
  )
}
