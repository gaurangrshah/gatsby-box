import Axios from "axios";

export async function getRandomImage() {
  const imageSrc = await Axios.get("https://source.unsplash.com/random?orientation=landscape")
  console.log(imageSrc)
  return imageSrc
}

export function toUpper(str) {
  return str.replace(/^\w/, c => c.toUpperCase())
}
