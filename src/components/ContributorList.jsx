import { Avatar, AvatarGroup } from '@nextui-org/react';

export default function ContributorList({ byline, contributors = [] }) {
  const avatars = contributors.map(({ name, image }, index) => (
    <>
      {image ? (
        <Avatar
          src={image}
          imageProps={{ alt: { name } }}
          key={index.toString()}
        />
      ) : (
        <></>
      )}
    </>
  ));

  const nameWithLinks = contributors.map(({ name, link }, index) => {
    let nameLink = <span className="font-bold">{name}</span>;
    if (link) {
      nameLink = (
        <a href={link} className="hover:underline" key={`contributor-${name}`}>
          {nameLink}
        </a>
      );
    }
    return nameLink;
  });

  const names = nameWithLinks.length
    ? nameWithLinks.reduce((prev, curr, index, items) => {
        const isLast = index >= items.length - 1;
        return isLast ? [prev, ' & ', curr] : [prev, ', ', curr];
      })
    : '';

  return (
    <div className="flex gap-x-5 items-center">
      <AvatarGroup isBordered>{avatars}</AvatarGroup>
      <div className="contributors">
        <span className="text-base">{byline}</span>
        <div className="contributor-names">{names}</div>
      </div>
    </div>
  );
}
