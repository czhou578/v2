
const myLoader = ( src: any, width: any, quality: any ) => {
  let srcPath = {src}
  let picWidth = {width}
  let picQuality = {quality}
  
  return `https://example.com/${srcPath}?w=${picWidth}&q=${picQuality || 75}`
}

export default myLoader