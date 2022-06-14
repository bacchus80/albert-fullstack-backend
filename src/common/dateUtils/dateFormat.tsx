export function dateFormat(date: Date | string){
  return new Date(date).toLocaleDateString()
}
export function getFullYear(date: Date | string){
  return new Date(date).getFullYear();
}