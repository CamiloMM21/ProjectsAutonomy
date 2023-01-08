import React, {useContext, useState} from "react"; 
import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../../database/firebase"
import { AuthContext } from "../../context/AuthContext";

const Search =() =>{
    const [username,  setUsername]=  useState("")
     const [ user, setUser] = useState(null);
     const [ err, setErr] = useState(false);

     const {currentUser} = useContext(AuthContext)

     const handleSearch = async() =>{
        const q = query(collection(db, "users"),
        where("displayName", "==", username)
        );
        try{
             const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser(doc.data())
        });
    }catch(err){
        setErr(true)
    }
       
};
     
     const handleKey = e=>{
        e.code === "Enter"&& handleSearch();
     };
     const handleSelect = async()=>{
        // chack wether the group(chats in firestore) exists, if not create
        const combinedId = currentUser.uid > user.uid 
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

        try{
            const res = await getDocs(doc(db, "chats", combinedId));

            if(!res.exists()){
                //create a chat in chats colletion
                await setDoc(doc, (db, "chats", combinedId), {messages: []});

                //user chats
                await updateDoc(doc(db, "userchats", currentUser.uid),{
                    [combinedId+".userInfo"]:{
                        uid:user.uid,
                        displayName: User.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId+"date"]:serverTimestamp()
                });
                await updateDoc(doc(db, "userchats", currentUser.uid),{
                    [combinedId+".userInfo"]:{
                        uid:currentUser.uid,
                        displayName: User.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId+"date"]:serverTimestamp()
                });
            }
        }catch(err){}
        

      
setUser(null);
setUsername("")
     };
  
    return(
        <div className="search">
            <div className="seacrhform" placeholder="Find a user">
                <imput type="text"
                 placeholder="Find a user"
                  onKeyDown={handleKey}
                   onChange={setUsername(e.target.value)}
                   value={username}/>
            </div>
            {err && <span>User not faoud</span>}
            { user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
};
export default Search;