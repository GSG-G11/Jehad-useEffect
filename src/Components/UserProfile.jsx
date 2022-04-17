import {useEffect, useState} from 'react';

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUserInfo(data);
      })
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, []);

  return (
    <>
      {!loading
        ? userInfo.map((user) => {
            return (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <button
                  onClick={() =>
                    setUserInfo((prev) =>
                      prev.filter((person) => person.id !== user.id)
                    )
                  }
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    const newName = prompt('Username: ');
                    setUserInfo((prev) =>
                      prev.map((person) =>
                        person.id === user.id
                          ? { ...person, name: newName }
                          : person
                      )
                    );
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })
        : 'Loading'}
    </>
  );
};

export default UserProfile;