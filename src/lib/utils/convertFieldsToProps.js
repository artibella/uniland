/**
 * Converts a raw Content entry or Canvas block or asset instance to React component props format.
 * This merges each parameter moved to the root object and removes the 'value' node,
 * hugely simplifying rendering code. For example if the raw object has fields.foo.value,
 * then the final props have props.foo === raw.fields.foo.value.
 */
export function convertFieldsToProps(item, type = 'item') {
  const fields = item.fields ?? {};

  const renderComponentProps = {
    ...Object.keys(fields).reduce((acc, cur) => {
      acc[cur] = fields[cur].value;
      return acc;
    }, {}),
  };
  renderComponentProps[type] = item;

  return renderComponentProps;
}

export function convertAssetToProps(item, type = 'asset') {
  return convertFieldsToProps(item, type);
}

export function convertBlockToProps(item, type = 'block') {
  return convertFieldsToProps(item, type);
}

export function convertEntryToProps(item, type = 'entry') {
  return convertFieldsToProps(item, type);
}