import React from 'react';
import styles from './index.less';

export default function Page() {
  const markRegex = /asdfasf/d;

  console.log(markRegex);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
