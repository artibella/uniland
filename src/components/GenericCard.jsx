import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import Link from 'next/link';
import { Badge, Card } from 'react-daisyui';
import isHtml from 'is-html';

export default function GenericCard({
  title = '',
  byline = '',
  image,
  body = '',
}) {
  return (
    <Card className="bg-white hover:-translate-y-2 transition-transform ease-in-out delay-150 duration-300">
      <Card.Image src={image} alt={title} />
      <Card.Body>
        {byline && (
          <Badge variant="outline" className="block">
            {byline}
          </Badge>
        )}
        <Card.Title
          tag="h4"
          className="text-xl hover:underline hover:underline-offset-1"
        >
          <UniformText
            parameterId="title"
            as="span"
            placeholder="Add card title"
          />
        </Card.Title>
        {isHtml(body) ? (
          <div className="" dangerouslySetInnerHTML={{ __html: body }} />
        ) : (
          <p>{body}</p>
        )}
        <Card.Actions className="mt-8">
          <UniformSlot name="actions" emptyPlaceholder={null} />
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
