export default function LinklistItem({ title = "", description = "", linkPrefix="", link = "" }) {
  const url = linkPrefix + link;
  return (
    <a href={url} className="block p-8 border-y-2 border-collapse hover:underline">
      <div className="md:grid md:grid-cols-12 md:gap-12">
        <h4 className="font-bold font-serif text-3xl mb-4 md:mb-0 md:text-4xl md:col-span-5">{title}</h4>
        <p className="md:text-xl md:col-span-7">{description}</p>
      </div>
    </a>
  )
}