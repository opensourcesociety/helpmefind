import { useEffect, useCallback } from 'react';

import { atom, useRecoilState } from 'recoil';

import firebase from '_firebase';

const db = firebase.firestore();
const postsRemote = db.collection('posts');

const postsState = atom({
  key: 'postsState',
  default: [],
});

function usePosts() {
  const [posts, setPosts] = useRecoilState(postsState);

  const get = useCallback(() => {
    postsRemote.get().then(querySnapshot => {
      const posts = [];
      // there is no .map on `querySnapshot`
      // and you are not able to get the all data as an array (yet)
      // so, that's why this mess is here
      querySnapshot.forEach(doc => posts.push({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(posts);
    });
  }, [setPosts]);

  useEffect(() => {
    // get the list of posts as soon as possible
    get();
  }, [get]);

  const add = useCallback(post => {
    // TODO: add validation
    postsRemote.add(post).then(docRef => {
      setPosts(posts => [...posts, { id: docRef.id, ...post }]);
    });
  }, [setPosts]);

  return [posts, { get, add }];
}

export { usePosts };
