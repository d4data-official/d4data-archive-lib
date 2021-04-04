export default function deleteUndefinedProperties(obj: Record<any, any>): Record<any, any> {
  const cleanedObject = { ...obj }

  Object.entries(obj).forEach(([key, value]) => value === undefined && delete cleanedObject[key])

  return cleanedObject
}
