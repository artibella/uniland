const extractContributorsFromSlots = ({component}) => {
  const contributors = component.slots?.contributors?.map((contributor) => {
    if(contributor._id === "placeholder") {
      return {
        name: '',
        image: ''       
      }
    }
    return {
      name: contributor.parameters.name.value,
      image: contributor.parameters.image.value
    }
  })

  return contributors;
}

export default function contributerListEnhancer (component) {

  return component
    .data('contributors', extractContributorsFromSlots)
}