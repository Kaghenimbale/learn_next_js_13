import React from 'react';

interface Props {
  params: { id: number; photosId: number };
}

const PhotoId = ({ params: { id, photosId } }: Props) => {
  return (
    <div>
      PhotoId {id} {photosId}
    </div>
  );
};

export default PhotoId;
