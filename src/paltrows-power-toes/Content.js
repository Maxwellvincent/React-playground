import React from 'react'
import './Content.css'

export default function Content({ className, ...props }) {
  console.log(props);
  return (
    <div className={['Content', className].join(' ')} {...props} />
  );
}
