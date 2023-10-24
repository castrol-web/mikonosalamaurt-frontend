import React from 'react';

const Card2 = ({className,children}) => {
  return (
    <article className={`card ${className}`}>
    {/* distructring of a class children  */}
{
    children
}
    </article>
  )
}

export default Card2;