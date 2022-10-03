export function NewPackage(props) {
  const newPackage =  {
        key:props.id,
        image:props.image,
        id:props.id,
        user_id:props.user_id,
        price:props.price,
        category:props.category,
        location:props.location,
        availability:props.availability
      }
  
  
  return newPackage
  
}
//push to mock data -> packages
