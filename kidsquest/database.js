
import { getFirestore, collection, getDocs, query, where, serverTimestamp, addDoc } from "firebase/firestore";
import app from "./firebase";
//Verify users in the application
export const verifyUserCredentials = async (username, password) => {
  const firestore = getFirestore(app);

  const userQuery = query(
    collection(firestore, 'accounts'), // 'users' is the table
    where('username', '==', username),
    where('password', '==', password)
  );

  try {
    const querySnapshot = await getDocs(userQuery);
    return querySnapshot.size > 0; // Return true if user exists, false otherwise
  } catch (e) {
    console.error(e);
    return false; // Return false on error
  }
};

const getUserCount = async () => {
  const firestore = getFirestore(app);
  const accountsCollectionRef = collection(firestore, 'accounts');
  const accountsSnapshot = await getDocs(accountsCollectionRef);
  return accountsSnapshot.size + 1;
};


//send information to the database
export const sendNewCredentials = async (name, lastn, email, username, password) => {
  const firestore = getFirestore(app);

  try {
    const userCount = await getUserCount();

    const newUserRef = await addDoc(collection(firestore, 'accounts'), {
      name,
      lastn,
      email,
      username,
      password,
      timestamp: serverTimestamp(),
      userid: `user${userCount}`,
    });

    console.log("User added with ID: ", newUserRef.id);
    return true; // success
  } catch (e) {
    console.error(e);
    return false; // Error
  }
};

