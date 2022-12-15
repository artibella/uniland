export default function ContributorList({ byline, contributors = [] }) {

  const avatars = contributors.map(({ name, image }, index) => (
    <>
      {image ? (
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden"
          src={image}
          alt={name} key={index.toString()}
        />
      ) : <></>}
    </>
  )
  );

  const nameWithLinks = contributors.map(({ name, link }, index) => {
    let nameLink = <span className="font-bold">{name}</span>;
    if (link) {
      nameLink = (
        <a href={link} className="hover:underline" key={`contributor-${name}`}>{nameLink}</a>
      )
    }
    return nameLink;
  })

  const names = nameWithLinks.length ? nameWithLinks.reduce(
    (prev, curr, index, items) => {
      const isLast = index >= items.length - 1;
      return isLast ? [prev, ' & ', curr] : [prev, ', ', curr]
    }
  ) : '';

  const avatarSpacing = contributors.length > 1 ? '-space-x-2' : '';

  return (
    <div className="flex gap-x-5 items-center">
      <div className="avatars">
        <div className={`flex ${avatarSpacing}`}>
          {avatars}
        </div>
      </div>
      <div className="contributors">
        <span className="text-base">{byline}</span>
        <div className="contributor-names">{names}</div>
      </div>
    </div>
  )
}
