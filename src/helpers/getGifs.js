export const getGifs = async ( category ) => {
  const api = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=HJXGoYw6zBFnWg5W3g25mTVu6Ya1Nb3Y`;

  const response = await fetch( api );
  const { data } = await response.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })

  return gifs;

}