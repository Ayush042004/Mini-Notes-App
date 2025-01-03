import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
//taking ref for animation and use 
  const ref = useRef(null);
// initial state of title and description and doc where the whole title and desc will be inserted 
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [doc, setdoc] = useState([]);

//getting a list from local storage 
  useEffect(() => {
    const storedDocs = JSON.parse(localStorage.getItem("docList"));
    if (storedDocs && storedDocs.length > 0) {
      setdoc(storedDocs);
    }
  }, []);

//setting the list and doc in localstorage in string 
  useEffect(() => {
    localStorage.setItem("docList", JSON.stringify(doc));
  }, [doc]);

// form submit function in setdoc spreading the prev one and adding title, desc after that setting both title and desc empty
  const SubmitHandler = (e) => {
    e.preventDefault();
// empty title and desc should not be rendered 
    if (title.trim() === ""|| desc.trim() === "") {
      alert("both title and decription are required");
      return;
    }

    setdoc([...doc, { title, desc }]);
    settitle("");
    setdesc("");
  };
 
  
// this is the delete function where index as prop and updateddoc a new array
  const handleDelete = (index) => {
    const updatedDoc = [...doc];
    updatedDoc.splice(index, 1);
    setdoc(updatedDoc);
  };
// rendered doc is assigned for all docs array t used for title and desc for each document a <div> is created with contains card comp
//i is used for key value pair and on delete function called in i each element of the div the doc 
  const renderDoc = doc.map((t, i)=>{
    return(
      <div>
        <Card 
        reference={ref} 
        key={i} 
        title={t.title} 
        desc={t.desc} 
        onDelete={() => handleDelete(i)} />
      </div>
    )
  })

  return (
    <>
      <div ref={ref} className="top-0 left-0 z-[3] h-full w-full">
        <div className="input-container fixed input  top-7 right-10">
          <form className="input-form flex gap-5" onSubmit={SubmitHandler}>
            <input
              type="text"
              className="input-text text-center p-1 border-2 border-zinc-600 text-white bg-zinc-800 rounded-lg"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input
              type="text"
              className="input-text text-center p-1 border-2 border-zinc-600 text-white bg-zinc-800 rounded-lg"
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
            <button className="input-button bg-blue-600 w-28 rounded-lg text-white">
              Let's do it
            </button>
          </form>
        </div>

        <div className="Card-display-wrapper p-4">
          <div className="Card-display grid grid-cols-5 grid-rows-5 w-full h-[120rem] p-2">{renderDoc}</div>
        </div>
      </div>
    </>
  );
}

export default Foreground;