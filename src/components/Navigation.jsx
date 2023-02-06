export default function Navigation({ component }) {
  return (
    <nav role="nav" className="navigation">
      <ul>
        {component.slots.items.map((item, index) => (
          <li key={index}>
            <a href={item.parameters.url.value}>
              {item.parameters.title.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
