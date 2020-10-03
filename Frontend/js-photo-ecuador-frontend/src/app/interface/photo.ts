export interface Photo{
  id?:string,
  previewImageSrc?:string,
  thumbnailImageSrc?: string,
  alt?:string,
  title?:string,
  url?:string,
  name?:string,
  description?:string
  album?:any[],
  status?:string
}
