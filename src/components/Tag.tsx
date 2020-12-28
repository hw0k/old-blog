import React from 'react';

interface Props {
  children: string;
}

function Tag({ children }: Props) {
  return <div className="px-2 py-1 bg-gray-200 text-sm rounded-md">{children}</div>;
}

export default Tag;
