
import Directory from '../../components/directory/Directory';

function Home() {

  const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/21/11/16/fashion-1844724__480.jpg"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://cdn.pixabay.com/photo/2017/08/06/08/42/guy-2590367__480.jpg"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://cdn.pixabay.com/photo/2017/08/03/15/26/beautiful-2576840__480.jpg"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://cdn.pixabay.com/photo/2019/09/04/13/41/couple-4451632__480.jpg"
  }
]

  return (
   <><Directory categories={categories}/></>
  );
}

export default Home