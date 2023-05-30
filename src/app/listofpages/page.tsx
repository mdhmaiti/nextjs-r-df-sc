import Image from 'next/image';


const getPostsData = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const getUsersData = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

 const getDogPhotos = async() => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {cache: "no-store"});
   return res.json();
 };







// "post" is a object of  this api . and .title is a prop
export default async function ListOfPages() {

  const postsx = await getPostsData();
  const userx = await getUsersData();
  const dogx = await getDogPhotos();



    return (

      

      <div>
        <Image
      src={dogx.message}
      alt="dog"
      width={500}
      height={500}
    />


        {postsx.map((post:any) => {
          // eslint-disable-next-line react/jsx-key
          return <p> {post.title} </p>;
        })}

        <div>

          {userx.map((user:any) => {
            // eslint-disable-next-line react/jsx-key
            return <p> {user.name} </p>
        }  )}
        </div>
      </div>
    );
  }
  // in react the name of the function st with cap .(note)