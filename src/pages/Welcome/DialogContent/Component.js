import React, { useState } from 'react';

import { usePosts } from 'store/firebase';

const emptyData = {
  type: '',
  title: '',
  description: '',
  contacts: '',
  document: {
    type: '',
    documentID: '',
    details: '',
  }
};

function DialogContent(props) {
  const { post } = props;
  const [postData,] = useState(post || emptyData);
  const [, ,] = usePosts();

  return (
     <div>
      {postData.title}
     </div>
  );
};

export default DialogContent;