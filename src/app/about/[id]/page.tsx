//dynamic routing using the folder format 
export default function AbouWithId({params}:any) {
    return (
      <div>
        <h1> this is a about page with ID : {params.id} </h1>
      </div>
    );
  }
  // in react the name of the function st with cap .(note)
 // {parameter}: any ; because it is a typescript object 
 //it is set to any bc so t it does not have any complains .
 // here it is used as an object note : .<foldername>
 //dymnamicc routing uses [].
 // /about/<what ever you like>