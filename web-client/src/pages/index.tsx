import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'
import { Tasks } from '../components/tasks/Tasks'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Tasks />
    </div>
  )
}

export default Home
